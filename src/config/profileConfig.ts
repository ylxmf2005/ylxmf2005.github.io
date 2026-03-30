import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "https://github.com/ylxmf2005.png",

	// 名字
	name: "Ethan Lee",

	// 个人签名
	bio: "PolyU CS Year 3，正在做 AI Companion、agent-native workflows，以及值得长期使用的产品。",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/ylxmf2005",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:ethanelift@gmail.com",
			showName: false,
		},
		{
			name: "CLIClaw",
			icon: "material-symbols:smart-toy-outline",
			url: "https://github.com/ylxmf2005/CLIClaw",
			showName: false,
		},
		{
			name: "Open LLM Vtuber",
			icon: "material-symbols:live-tv-outline",
			url: "https://github.com/Open-LLM-VTuber/Open-LLM-VTuber",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
