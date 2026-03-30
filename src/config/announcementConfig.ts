import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "站点状态",

	// 公告内容
	content: "",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: false,
		// 链接文本
		text: "",
		// 链接 URL
		url: "",
		// 内部链接
		external: false,
	},
};
