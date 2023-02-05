import { usePreview } from "@/sanity/preview";
import { postQueryBySlug } from "@/sanity/queries";
import { type Post } from "@/sanity/schemas/post";
import getMdx from "@/utils/getMdx";
import { type MDXRemoteSerializeResult } from "next-mdx-remote";
import { useEffect, useState } from "react";
import Loading from "../UI/Loading";
import BlogPost from "./BlogPost";

export default function PreviewBlogPost({
  query,
  preview,
}: {
  query: typeof postQueryBySlug;
  preview: boolean;
}) {
  const post: Post = usePreview(null, query);
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

  return <BlogPost post={post} source={source} preview />;
}
