import Layout from "@/components/layout/Layout";
import dayjs from "dayjs";
import { type Post } from "@/sanity/schemas/post";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { Settings } from "@/sanity/schemas/settings";
import { mdxComponents } from "@/lib/mdxComponents";
import { ProseH1, ProseSubtle } from "../ui/typography";
import { motion, useScroll, useSpring } from "framer-motion";

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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Layout
      title={post.title}
      description={post.description}
      path={`blog/${post.slug}`}
      socials={socials}
      preview={preview}
    >
      <>
        <motion.div
          className={`fixed inset-0 z-50 h-2 origin-left bg-slate-700 dark:bg-slate-300 ${
            preview ? "top-11" : ""
          }`}
          style={{ scaleX }}
        />
        <section>
          <header className="mb-6 space-y-2">
            <ProseH1>{post.title}</ProseH1>
            <ProseSubtle>
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
            </ProseSubtle>
          </header>
          <article aria-label="Post">
            <MDXRemote {...source} components={mdxComponents} />
          </article>
        </section>
      </>
    </Layout>
  );
}
