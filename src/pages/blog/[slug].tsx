import { type InferGetStaticPropsType } from "next";
import getMdx from "@/utils/getMdx";
import { getAllPosts, getPostBySlug } from "@/sanity/queries";
import BlogPost from "@/components/blog/BlogPost";

import { lazy } from "react";
import { PreviewSuspense } from "next-sanity/preview";
import Loading from "@/components/UI/Loading";

const PreviewBlogPost = lazy(() => import("@/components/blog/PreviewBlogPost"));

export default function Blog({
  post,
  source,
  preview,
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (preview) {
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PreviewBlogPost preview={preview} slug={slug} />
      </PreviewSuspense>
    );
  }

  return <BlogPost post={post} source={source} />;
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

  const post = await getPostBySlug(slug);
  const source = await getMdx(post.body);

  return {
    props: {
      post,
      source,
    },
    revalidate: 60,
  };
};
