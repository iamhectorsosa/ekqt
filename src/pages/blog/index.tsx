import { type InferGetStaticPropsType } from "next";
import Layout from "@/components/layout/Layout";
import Card from "@/components/UI/Card";
import { getAllPosts } from "@/sanity/queries";

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title="Blog" path="blog">
      <section>
        <header className="mb-6">
          <h2 className="text-3xl font-bold sm:text-4xl">All Posts</h2>
        </header>
        <div className="divide-y divide-slate-500">
          {posts.map((post, index) => (
            <Card key={index} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
