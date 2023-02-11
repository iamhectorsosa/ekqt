import Layout from "@/components/layout/Layout";
import dayjs from "dayjs";
import { type Post } from "@/sanity/schemas/post";
import {
  MDXRemote,
  type MDXRemoteProps,
  type MDXRemoteSerializeResult,
} from "next-mdx-remote";
import { Settings } from "@/sanity/schemas/settings";

const components = {
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <div className="not-prose after:leading-0 relative my-8 rounded-md border border-transparent bg-slate-200/50 p-8 before:absolute before:top-2 before:left-4 before:text-9xl before:opacity-10 before:content-[open-quote] after:invisible after:absolute after:content-[close-quote] dark:bg-slate-800/75">
      <blockquote className="text-lg font-medium leading-relaxed md:text-2xl md:leading-9">
        {children}
      </blockquote>
    </div>
  ),
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
          <h2 className="text-3xl font-bold sm:text-5xl">{post.title}</h2>
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
        <article
          aria-label="Post"
          className="prose:slate prose min-w-full dark:prose-invert lg:prose-lg"
        >
          <MDXRemote {...source} components={components} />
        </article>
      </section>
    </Layout>
  );
}
