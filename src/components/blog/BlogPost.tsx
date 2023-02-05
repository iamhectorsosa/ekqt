import Layout from "@/components/layout/Layout";
import dayjs from "dayjs";
import { type Post } from "@/sanity/schemas/post";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

export default function BlogPost({
  post,
  source,
  preview,
}: {
  post: Post;
  source: MDXRemoteSerializeResult;
  preview?: boolean;
}) {
  return (
    <Layout
      title={post.title}
      description={post.description}
      path={`blog/${post.slug}`}
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
          className="prose:slate prose min-w-full prose-p:text-justify dark:prose-invert lg:prose-lg"
        >
          <MDXRemote {...source} />
        </article>
      </section>
    </Layout>
  );
}
