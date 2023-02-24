import Layout from "@/components/layout/Layout";
import dayjs from "dayjs";
import { type Post } from "@/sanity/schemas/post";
import {
  MDXRemote,
  type MDXRemoteProps,
  type MDXRemoteSerializeResult,
} from "next-mdx-remote";
import { Settings } from "@/sanity/schemas/settings";

import Pre from "@/components/ui/Pre";
import {
  ProseAnchor,
  ProseBlockquote,
  ProseH1,
  ProseH2,
  ProseH3,
  ProseH4,
  ProseInlineCode,
  ProseP,
  ProseStrong,
  ProseUL,
} from "@/components/ui/typography";

const components = {
  pre: Pre,
  h1: ProseH1,
  h2: ProseH2,
  h3: ProseH3,
  h4: ProseH4,
  p: ProseP,
  a: ProseAnchor,
  strong: ProseStrong,
  blockquote: ProseBlockquote,
  ul: ProseUL,
  code: ProseInlineCode,
} as MDXRemoteProps["components"];

export default function BlogPost({
  post,
  source,
  socials,
  preview,
}: {
  post: Post;
  source: MDXRemoteSerializeResult;
  socials: Settings["socials"];
  preview?: boolean;
}) {
  return (
    <Layout
      title={post.title}
      description={post.description}
      path={`blog/${post.slug}`}
      socials={socials}
      preview={preview}
    >
      <section>
        <header className="mb-6 space-y-2">
          <h2 className="text-4xl font-bold sm:text-5xl">{post.title}</h2>
          <div className="text-sm text-slate-500">
            {!post.publishedAt || !post.readingTime ? (
              "Draft"
            ) : (
              <>
                <span>
                  {dayjs(post.publishedAt).format("dddd DD MMMM YYYY")}
                </span>
                {" · "}
                <span> {post.readingTime} min read</span>
              </>
            )}
          </div>
        </header>
        <article aria-label="Post">
          <MDXRemote {...source} components={components} />
        </article>
      </section>
    </Layout>
  );
}
