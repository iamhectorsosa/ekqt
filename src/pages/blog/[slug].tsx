import { type InferGetStaticPropsType } from "next";
import getMdx from "@/utils/getMdx";
import { getAllPosts, getPostBySlug, getSettings } from "@/sanity/queries";
import BlogPost from "@/components/blog/BlogPost";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy } from "react";
import { PreviewSuspense } from "next-sanity/preview";
import Loading from "@/components/UI/Loading";
const PreviewBlogPost = lazy(() => import("@/components/blog/PreviewBlogPost"));
const queryClient = new QueryClient();

export default function Blog({
  socials,
  post,
  source,
  preview,
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (preview) {
    return (
      <QueryClientProvider client={queryClient}>
        <PreviewSuspense fallback={<Loading />}>
          <PreviewBlogPost preview={preview} slug={slug} />
        </PreviewSuspense>
      </QueryClientProvider>
    );
  }

  return <BlogPost post={post} source={source} socials={socials} />;
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
  preview = false,
}: {
  params: { slug: string };
  preview: boolean;
}) => {
  if (preview) {
    return {
      props: { preview, slug },
    };
  }

  const { socials } = await getSettings(`{
    _id,
    socials
  }`);
  const post = await getPostBySlug(slug);
  const source = await getMdx(post.body);

  return {
    props: {
      socials,
      post,
      source,
    },
    revalidate: 60,
  };
};
