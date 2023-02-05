import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

export default async function getMdx(source: string) {
  return await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      development: process.env.NODE_ENV !== "production",
      rehypePlugins: [
        rehypeSlug,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "wrap",
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
      format: "mdx",
    },
  });
}
