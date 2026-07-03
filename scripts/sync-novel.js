/*
 * 从本地小说工作区（novel-test）同步章节正文到博客。
 *
 * 单一数据源是小说仓库的 正文/第NN章.md（第一行为章节标题，其余为正文）。
 * 本脚本把正文灌进 src/content/posts/ 下对应的博客文件：
 *   - 已存在的博客文件：保留 frontmatter（published/description 等手动字段不动），
 *     仅更新 title 和正文；
 *   - 新章节：按配置生成 frontmatter 并建档。
 *
 * 小说目录不存在时（例如 CI 上）静默跳过，不影响构建。
 * 用法：node scripts/sync-novel.js [--check|--stage]
 *   --check 只报告差异，不写文件；--stage 同步后把改动的章节 git add（供 pre-commit 钩子用）
 */

import { execFileSync } from "child_process";
import fs from "fs";
import path from "path";

const CONFIG = [
	{
		sourceDir: "/Users/ethan/Desktop/novel-test/projects/ai后宫编年史/正文",
		slugPrefix: "jiuming-wo-bei-ai-baowei-le-chapter-",
		frontmatter: {
			tags: "[小说, 救命我被AI包围了]",
			category: "小说",
			lang: "zh",
			draft: "false",
			hidden: "true",
			series: "jiuming-wo-bei-ai-baowei-le",
			seriesTitle: "救命，我被AI包围了",
		},
	},
];

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");
const checkOnly = process.argv.includes("--check");
const stage = process.argv.includes("--stage");

function parseSource(raw) {
	const lines = raw.replace(/\r\n/g, "\n").split("\n");
	const title = (lines[0] || "").trim();
	let start = 1;
	while (start < lines.length && lines[start].trim() === "") start++;
	const body = lines.slice(start).join("\n").trimEnd();
	return { title, body };
}

function todayISO() {
	const d = new Date();
	const pad = (n) => String(n).padStart(2, "0");
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function buildNewFile(seriesConf, title, chapter, body) {
	const fm = seriesConf.frontmatter;
	return [
		"---",
		`title: ${title}`,
		`published: ${todayISO()}`,
		"description: ",
		`tags: ${fm.tags}`,
		`category: ${fm.category}`,
		`lang: ${fm.lang}`,
		`draft: ${fm.draft}`,
		`hidden: ${fm.hidden}`,
		`series: ${fm.series}`,
		`seriesTitle: ${fm.seriesTitle}`,
		`chapter: ${chapter}`,
		"---",
		"",
		body,
		"",
	].join("\n");
}

function updateExistingFile(existing, title, chapter, body) {
	const match = existing.match(/^---\n([\s\S]*?)\n---\n?/);
	if (!match) throw new Error("目标文件缺少 frontmatter");
	let fm = match[1];
	fm = fm.replace(/^title:.*$/m, `title: ${title}`);
	fm = fm.replace(/^chapter:.*$/m, `chapter: ${chapter}`);
	return `---\n${fm}\n---\n\n${body}\n`;
}

let changed = 0;
const changedFiles = [];
for (const seriesConf of CONFIG) {
	if (!fs.existsSync(seriesConf.sourceDir)) {
		console.log(`[sync-novel] 跳过（源目录不存在）: ${seriesConf.sourceDir}`);
		continue;
	}
	const files = fs
		.readdirSync(seriesConf.sourceDir)
		.filter((f) => /^第(\d+)章\.md$/.test(f))
		.sort();

	for (const file of files) {
		const num = file.match(/^第(\d+)章\.md$/)[1];
		const chapter = Number.parseInt(num, 10);
		const raw = fs.readFileSync(path.join(seriesConf.sourceDir, file), "utf-8");
		const { title, body } = parseSource(raw);
		if (!title || !body) {
			console.warn(`[sync-novel] 跳过（缺标题或正文）: ${file}`);
			continue;
		}

		const target = path.join(POSTS_DIR, `${seriesConf.slugPrefix}${num}.md`);
		const next = fs.existsSync(target)
			? updateExistingFile(fs.readFileSync(target, "utf-8"), title, chapter, body)
			: buildNewFile(seriesConf, title, chapter, body);

		if (fs.existsSync(target) && fs.readFileSync(target, "utf-8") === next) {
			continue;
		}
		changed++;
		if (checkOnly) {
			console.log(`[sync-novel] 有差异: ${file} -> ${path.basename(target)}`);
		} else {
			fs.writeFileSync(target, next);
			changedFiles.push(target);
			console.log(`[sync-novel] 已同步: ${file} -> ${path.basename(target)}`);
		}
	}
}

if (changed === 0) {
	console.log("[sync-novel] 无差异，全部同步。");
} else if (checkOnly) {
	process.exitCode = 1;
}

if (stage && changedFiles.length > 0) {
	execFileSync("git", ["add", "--", ...changedFiles], { stdio: "inherit" });
	console.log(`[sync-novel] 已暂存 ${changedFiles.length} 个文件。`);
}
