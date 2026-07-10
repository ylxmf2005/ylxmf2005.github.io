import type { CollectionEntry } from "astro:content";
import config from "@/config";

export function normalizePostLocale(locale: string | undefined): string {
  const normalized = (locale ?? config.site.lang).toLowerCase();
  if (normalized === "zh" || normalized.startsWith("zh-")) return "zh-CN";
  if (normalized === "en" || normalized.startsWith("en-")) return "en";
  return locale ?? config.site.lang;
}

export function isPostInLocale(
  post: CollectionEntry<"posts">,
  locale: string | undefined
): boolean {
  return normalizePostLocale(post.data.lang) === normalizePostLocale(locale);
}
