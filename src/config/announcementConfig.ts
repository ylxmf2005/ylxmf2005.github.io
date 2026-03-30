import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "欢迎来到我的博客",

	// 公告内容
	content: "这里会记录我在 AI Companion、multi-agent systems 和真实产品开发里的长期思考。",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "先看 About",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
