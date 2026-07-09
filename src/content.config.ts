import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import config from "@/config";

export const BLOG_PATH = "src/content/posts";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z
      .object({
        author: z.string().default(config.site.author),
        pubDatetime: z.date().optional(),
        published: z.date().optional(),
        modDatetime: z.date().optional().nullable(),
        updated: z.date().optional().nullable(),
        title: z.string(),
        featured: z.boolean().optional(),
        pinned: z.boolean().optional(),
        draft: z.boolean().optional(),
        tags: z.array(z.string()).default(["others"]),
        category: z.string().optional().nullable(),
        ogImage: image().or(z.string()).optional(),
        image: image().or(z.string()).optional(),
        description: z.string(),
        canonicalURL: z.string().optional(),
        hideEditPost: z.boolean().optional(),
        timezone: z.string().optional(),
        lang: z.string().optional(),
        hidden: z.boolean().optional().default(false),
        series: z.string().optional(),
        seriesTitle: z.string().optional(),
        chapter: z.number().optional(),
        volume: z.string().optional(),
        sourceLink: z.string().optional(),
        licenseName: z.string().optional(),
        licenseUrl: z.string().optional(),
        comment: z.boolean().optional(),
        password: z.string().optional(),
        passwordHint: z.string().optional(),
      })
      .superRefine((data, ctx) => {
        if (!data.pubDatetime && !data.published) {
          ctx.addIssue({
            code: "custom",
            message:
              "Post frontmatter must include `pubDatetime` or `published`.",
            path: ["pubDatetime"],
          });
        }
      })
      .transform(data => {
        const tags =
          data.tags.length > 0
            ? data.tags
            : data.category
              ? [data.category]
              : ["others"];

        return {
          ...data,
          pubDatetime: data.pubDatetime ?? data.published!,
          modDatetime: data.modDatetime ?? data.updated ?? null,
          featured: data.featured ?? data.pinned ?? false,
          tags,
          ogImage: data.ogImage || data.image || undefined,
        };
      }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
  }),
});

export const collections = { posts, pages };
