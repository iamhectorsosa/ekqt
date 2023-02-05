import { usePreview } from "@/sanity/preview";
import { allPostsQuery } from "@/sanity/queries";
import BlogHome from "./BlogHome";
import { type Post } from "@/sanity/schemas/post";

export default function PreviewBlogHome({
  query,
  preview,
}: {
  query: typeof allPostsQuery;
  preview: boolean;
}) {
  const posts: Post[] = usePreview(null, query);
  return <BlogHome posts={posts} preview />;
}
