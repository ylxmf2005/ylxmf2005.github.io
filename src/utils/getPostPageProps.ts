import { getCollection } from "astro:content";
import { getPostSlug } from "./getPostPaths";
import { getSortedPosts } from "./getSortedPosts";
import { isPostPublished } from "./postFilter";
import { isPostInLocale } from "./postLocale";

export async function getPostPageProps(locale: string) {
  const posts = (await getCollection("posts")).filter(post =>
    isPostInLocale(post, locale)
  );
  const visiblePosts = getSortedPosts(posts);

  return posts.filter(isPostPublished).map(post => {
    const index = visiblePosts.findIndex(({ id }) => id === post.id);

    return {
      params: { slug: getPostSlug(post.id, post.filePath) },
      props: {
        post,
        prevPost:
          index > 0
            ? {
                id: visiblePosts[index - 1].id,
                title: visiblePosts[index - 1].data.title,
                filePath: visiblePosts[index - 1].filePath,
              }
            : null,
        nextPost:
          index >= 0 && index < visiblePosts.length - 1
            ? {
                id: visiblePosts[index + 1].id,
                title: visiblePosts[index + 1].data.title,
                filePath: visiblePosts[index + 1].filePath,
              }
            : null,
      },
    };
  });
}
