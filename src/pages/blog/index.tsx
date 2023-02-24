import { type InferGetStaticPropsType } from "next";
import { getAllPosts, getSettings } from "@/sanity/queries";
import Layout from "@/components/layout/Layout";
import Card from "@/components/UI/Card";

export default function Blog({
  socials,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title="Blog" description="Read more" path="blog" socials={socials}>
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
  const { socials } = await getSettings(`{
    _id,
    socials
  }`);
  const posts = await getAllPosts();

  return {
    props: {
      socials,
      posts,
    },
    revalidate: 60,
  };
}
