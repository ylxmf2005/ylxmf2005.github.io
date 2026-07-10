import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { getPostUrl } from "@/utils/getPostPaths";
import { isPostInLocale } from "@/utils/postLocale";
import { useTranslations } from "@/i18n";
import config from "@/config";

export async function GET() {
  const t = useTranslations("en");
  const posts = await getCollection("posts");
  const sortedPosts = getSortedPosts(
    posts.filter(post => isPostInLocale(post, "en"))
  );

  return rss({
    title: `${config.site.title} — English`,
    description: t.site.description,
    site: config.site.url,
    items: sortedPosts.map(({ data, id, filePath }) => ({
      link: getPostUrl(id, filePath, "en"),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
    })),
  });
}
