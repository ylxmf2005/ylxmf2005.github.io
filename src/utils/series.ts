import { getCollection, type CollectionEntry } from "astro:content";
import { isPostPublished } from "./postFilter";
import { isPostInLocale } from "./postLocale";

export type Series = {
  slug: string;
  title: string;
  posts: CollectionEntry<"posts">[];
};

export async function getChineseSeries(): Promise<Series[]> {
  const posts = await getCollection("posts");
  const grouped = new Map<string, Series>();

  for (const post of posts) {
    const { hidden, series: slug, seriesTitle: title } = post.data;
    if (
      !hidden ||
      !slug ||
      !title ||
      !isPostPublished(post) ||
      !isPostInLocale(post, "zh")
    ) {
      continue;
    }

    const entry = grouped.get(slug) ?? { slug, title, posts: [] };
    entry.posts.push(post);
    grouped.set(slug, entry);
  }

  return [...grouped.values()]
    .map(series => ({
      ...series,
      posts: series.posts.sort(
        (a, b) => (a.data.chapter ?? 0) - (b.data.chapter ?? 0)
      ),
    }))
    .sort((a, b) => a.title.localeCompare(b.title, "zh-CN"));
}
