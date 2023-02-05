import Layout from "@/components/layout/Layout";
import Card from "@/components/UI/Card";
import { type Post } from "@/sanity/schemas/post";

export default function BlogHome({
  posts,
  preview,
}: {
  posts: Post[];
  preview?: boolean;
}) {
  return (
    <Layout title="Blog" description="Read more" path="blog" preview={preview}>
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
