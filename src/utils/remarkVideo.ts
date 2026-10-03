// 文章里的视频沿用图片语法：![图注](./images/xxx.mp4)。
// Astro 只打包 Markdown 图片，遇到 mp4 会当成图片去处理，所以视频文件放在 public/videos/
// （小说插图由小说仓库的 sync-blog.sh 拷过来），这里抢在 Astro 收集图片之前，
// 把这类节点换成指向 /videos/ 的静音循环 <video>。
const VIDEO = /\.(mp4|webm)$/i;

type Node = {
  type: string;
  url?: string;
  alt?: string | null;
  value?: string;
  children?: Node[];
};

const escapeAttr = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

export function remarkVideo() {
  const walk = (node: Node) => {
    node.children?.forEach((child, i) => {
      if (child.type === "image" && child.url && VIDEO.test(child.url)) {
        const src = `/videos/${child.url.split("/").pop()}`;
        const alt = child.alt ?? "";
        node.children![i] = {
          type: "html",
          value: `<video src="${escapeAttr(src)}" aria-label="${escapeAttr(alt)}" autoplay loop muted playsinline></video>`,
        };
      } else {
        walk(child);
      }
    });
  };
  return (tree: Node) => walk(tree);
}
