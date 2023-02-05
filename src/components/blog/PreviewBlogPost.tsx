import { usePreview } from "@/sanity/preview";
import { postQueryBySlug } from "@/sanity/queries";
import { type Post as PostType } from "@/sanity/schemas/post";
import getMdx from "@/utils/getMdx";
import { type MDXRemoteSerializeResult } from "next-mdx-remote";
import { useEffect, useState } from "react";
import Loading from "../UI/Loading";
import Post from "./BlogPost";

export default function PreviewBlogPost({
  slug,
  preview,
}: {
  slug: typeof postQueryBySlug;
  preview: boolean;
}) {
  const post: PostType = usePreview(null, postQueryBySlug, { slug });
  const [source, setSource] = useState<MDXRemoteSerializeResult>();

  useEffect(() => {
    async function loadMdx() {
      const result = await getMdx(post.body);
      setSource(result);
    }
    loadMdx();
  }, [post]);

  if (!source) {
    return <Loading />;
  }

  return <Post preview={preview} post={post} source={source} />;
}
