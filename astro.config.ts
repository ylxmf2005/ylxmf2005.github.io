import {
  defineConfig,
  envField,
  fontProviders,
  sharpImageService,
  svgoOptimizer,
} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkMath from "remark-math";
import rehypeCallouts from "rehype-callouts";
import rehypeKatex from "rehype-katex";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerFileName } from "./src/utils/transformers/fileName";
import { remarkVideo } from "./src/utils/remarkVideo";
import config from "./astro-paper.config";

export default defineConfig({
  site: config.site.url,
  redirects: {
    "/series/ai-hougong-biannianshi": "/series/wan-dan-wo-bei-ai-baowei-le",
    "/zh/series/ai-hougong-biannianshi": "/zh/series/wan-dan-wo-bei-ai-baowei-le",
  },
  integrations: [
    mdx(),
    sitemap({
      filter: page =>
        config.features?.showArchives !== false || !page.endsWith("/archives/"),
    }),
  ],
  i18n: {
    locales: ["en", { codes: ["zh-CN", "zh"], path: "zh" }],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    processor: unified({
      remarkPlugins: [
        [remarkMath, { singleDollarTextMath: true }],
        remarkToc,
        [remarkCollapse, { test: "Table of contents" }],
        remarkVideo,
      ],
      rehypePlugins: [rehypeKatex, rehypeCallouts],
    }),
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName({ style: "v2", hideDot: false }),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
  // 文章插图在构建时会被转成 webp。sharp 默认质量 80，插画（尤其小说配图）会明显发糊，
  // 所以提到 95：源图存无损，只在这里压一次。
  image: {
    service: sharpImageService({ webp: { quality: 95 } }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: "Google Sans Code",
      cssVariable: "--font-google-sans-code",
      provider: fontProviders.google(),
      fallbacks: ["monospace"],
      weights: [300, 400, 500, 600, 700],
      styles: ["normal", "italic"],
      formats: ["woff", "ttf"],
    },
  ],
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});
