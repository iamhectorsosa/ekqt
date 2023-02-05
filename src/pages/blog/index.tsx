import { type InferGetStaticPropsType } from "next";
import { allPostsQuery, getAllPosts } from "@/sanity/queries";
import { lazy } from "react";
import { PreviewSuspense } from "next-sanity/preview";
import BlogHome from "@/components/blog/BlogHome";
import Loading from "@/components/UI/Loading";
const PreviewBlogs = lazy(() => import("@/components/blog/PreviewBlogHome"));

export default function Blog({
  posts,
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (preview) {
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PreviewBlogs preview={preview} query={allPostsQuery} />
      </PreviewSuspense>
    );
  }

  return <BlogHome posts={posts} />;
}

export async function getStaticProps({ preview = false }) {
  if (preview) {
    return {
      props: { preview },
    };
  }
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}
