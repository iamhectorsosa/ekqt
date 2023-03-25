import { type InferGetStaticPropsType } from "next";
import { getAllPosts, getSettings } from "@/sanity/queries";
import Layout from "@/components/layout/Layout";
import Card from "@/components/ui/Card";
import { ProseH1 } from "@/components/ui/typography";

export default function Blog({
  socials,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title="Blog" description="Read more" path="blog" socials={socials}>
      <section>
        <header className="mb-6">
          <ProseH1>All Posts</ProseH1>
        </header>
        <div className="divide-y divide-slate-500">
          {posts
            .filter((post) => post.publishedAt)
            .map((post, index) => (
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
