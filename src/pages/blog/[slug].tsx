import { type InferGetStaticPropsType } from "next";
import Layout from "@/components/layout/Layout";
import getMdx from "@/utils/getMdx";
import { MDXRemote } from "next-mdx-remote";
import dayjs from "dayjs";
import { getAllPosts, getPostBySlug } from "@/sanity/queries";

export default function BlogPost({
  post,
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      title={post.title}
      description={post.description}
      path={`blog/${post.slug}`}
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

export async function getStaticPaths() {
  const posts = await getAllPosts();

  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const post = await getPostBySlug(slug);
  const source = await getMdx(post.body);

  return {
    props: {
      post,
      source,
    },
  };
};
