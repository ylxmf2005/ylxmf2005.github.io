import { type CollectionEntry, getCollection } from "astro:content";

export type SeriesInfo = {
	slug: string;
	title: string;
	chapterCount: number;
	latestDate: Date;
};

export type VolumeGroup = {
	// 空字符串表示未分卷
	volume: string;
	chapters: CollectionEntry<"posts">[];
};

export type SeriesChapterLink = {
	id: string;
	title: string;
	chapter?: number;
};

export type SeriesNavigation = {
	slug: string;
	title: string;
	chapter?: number;
	volume: string;
	prev: SeriesChapterLink | null;
	next: SeriesChapterLink | null;
};

// 合集章节包含 hidden 文章，仅排除草稿（与其他列表的草稿规则一致）
async function getSeriesPosts(): Promise<CollectionEntry<"posts">[]> {
	return await getCollection("posts", ({ data }) => {
		const notDraft = import.meta.env.PROD ? data.draft !== true : true;
		return notDraft && !!data.series;
	});
}

// 章节排序：chapter 升序，缺省 chapter 排在最后，同章节号按发布时间升序
function compareChapters(
	a: CollectionEntry<"posts">,
	b: CollectionEntry<"posts">,
): number {
	const chapterA = a.data.chapter ?? Number.MAX_SAFE_INTEGER;
	const chapterB = b.data.chapter ?? Number.MAX_SAFE_INTEGER;
	if (chapterA !== chapterB) return chapterA - chapterB;
	return (
		new Date(a.data.published).getTime() - new Date(b.data.published).getTime()
	);
}

function resolveSeriesTitle(
	slug: string,
	chapters: CollectionEntry<"posts">[],
): string {
	const withTitle = chapters.find((post) => post.data.seriesTitle);
	return withTitle?.data.seriesTitle || slug;
}

function latestDateOf(chapters: CollectionEntry<"posts">[]): Date {
	let latest = 0;
	for (const post of chapters) {
		const time = new Date(post.data.updated || post.data.published).getTime();
		if (time > latest) latest = time;
	}
	return new Date(latest);
}

// 所有合集，按最新更新时间降序
export async function getSeriesList(): Promise<SeriesInfo[]> {
	const posts = await getSeriesPosts();
	const grouped = new Map<string, CollectionEntry<"posts">[]>();
	for (const post of posts) {
		const slug = post.data.series;
		if (!grouped.has(slug)) grouped.set(slug, []);
		grouped.get(slug)?.push(post);
	}

	const list: SeriesInfo[] = [];
	for (const [slug, chapters] of grouped) {
		chapters.sort(compareChapters);
		list.push({
			slug,
			title: resolveSeriesTitle(slug, chapters),
			chapterCount: chapters.length,
			latestDate: latestDateOf(chapters),
		});
	}

	list.sort((a, b) => b.latestDate.getTime() - a.latestDate.getTime());
	return list;
}

// 某个合集的全部章节（含 hidden），按 chapter 升序
export async function getSeriesChapters(
	slug: string,
): Promise<CollectionEntry<"posts">[]> {
	const posts = await getSeriesPosts();
	return posts
		.filter((post) => post.data.series === slug)
		.sort(compareChapters);
}

// 按卷分组，卷的顺序取决于其第一个章节的位置；未分卷章节归入 volume 为空的分组
export function groupChaptersByVolume(
	chapters: CollectionEntry<"posts">[],
): VolumeGroup[] {
	const groups: VolumeGroup[] = [];
	const indexByVolume = new Map<string, number>();
	for (const post of chapters) {
		const volume = post.data.volume || "";
		let index = indexByVolume.get(volume);
		if (index === undefined) {
			index = groups.length;
			indexByVolume.set(volume, index);
			groups.push({ volume, chapters: [] });
		}
		groups[index].chapters.push(post);
	}
	return groups;
}

// 当前文章在其合集内的导航信息；文章不属于任何合集时返回 null
export async function getSeriesNavigation(
	entry: CollectionEntry<"posts">,
): Promise<SeriesNavigation | null> {
	if (!entry.data.series) return null;

	const chapters = await getSeriesChapters(entry.data.series);
	const index = chapters.findIndex((post) => post.id === entry.id);

	const toLink = (
		post: CollectionEntry<"posts"> | undefined,
	): SeriesChapterLink | null =>
		post
			? { id: post.id, title: post.data.title, chapter: post.data.chapter }
			: null;

	return {
		slug: entry.data.series,
		title: resolveSeriesTitle(entry.data.series, chapters),
		chapter: entry.data.chapter,
		volume: entry.data.volume,
		prev: index > 0 ? toLink(chapters[index - 1]) : null,
		next: index >= 0 ? toLink(chapters[index + 1]) : null,
	};
}
