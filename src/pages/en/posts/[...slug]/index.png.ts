import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getPostSlug } from "@/utils/getPostPaths";
import { isPostInLocale } from "@/utils/postLocale";
import config from "@/config";
import { GET as renderDynamicOgImage } from "../../../posts/[...slug]/index.png";

export async function getStaticPaths() {
  if (!config.features.dynamicOgImage) {
    return [];
  }

  const posts = await getCollection("posts").then(items =>
    items.filter(
      post =>
        !post.data.draft && !post.data.ogImage && isPostInLocale(post, "en")
    )
  );

  return posts.map(post => ({
    params: { slug: getPostSlug(post.id, post.filePath) },
    props: post,
  }));
}

export const GET: APIRoute = renderDynamicOgImage;
