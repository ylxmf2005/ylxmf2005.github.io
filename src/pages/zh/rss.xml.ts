import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getRelativeLocaleUrl } from "astro:i18n";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { getPostUrl } from "@/utils/getPostPaths";
import { isPostInLocale } from "@/utils/postLocale";
import { useTranslations } from "@/i18n";
import config from "@/config";

export async function GET() {
  const locale = "zh-CN";
  const t = useTranslations(locale);
  const posts = await getCollection("posts");
  const sortedPosts = getSortedPosts(
    posts.filter(post => isPostInLocale(post, locale))
  );

  return rss({
    title: `${config.site.title} — 中文`,
    description: t.site.description,
    site: new URL(getRelativeLocaleUrl(locale, ""), config.site.url),
    items: sortedPosts.map(({ data, id, filePath }) => ({
      link: getPostUrl(id, filePath, locale),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
    })),
  });
}
