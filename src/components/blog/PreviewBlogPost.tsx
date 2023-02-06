import { usePreview } from "@/sanity/preview";
import { postQueryBySlug } from "@/sanity/queries";
import { type Post } from "@/sanity/schemas/post";
import getMdx from "@/utils/getMdx";
import { useQuery } from "@tanstack/react-query";
import { type MDXRemoteSerializeResult } from "next-mdx-remote";
import Loading from "../UI/Loading";
import BlogPost from "./BlogPost";

async function getSource(body: string): Promise<MDXRemoteSerializeResult> {
  return await getMdx(body);
}

export default function PreviewBlogPost({
  slug,
  preview,
}: {
  slug: typeof postQueryBySlug;
  preview: boolean;
}) {
  const post: Post = usePreview(null, postQueryBySlug, { slug });
  const { data: source, isLoading } = useQuery(
    ["post"],
    () => getSource(post.body),
    { enabled: !!post.body }
  );

  if (isLoading || !source) {
    return <Loading />;
  }

  return <BlogPost preview={preview} post={post} source={source} />;
}
