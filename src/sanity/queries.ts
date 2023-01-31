import sanity from "./client";
import { type Post } from "./schemas/post";

const postPreviewFields = `{
    _id,
    slug, 
    title, 
    description,
    publishedAt,
}`;

const allPostsQuery = `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) ${postPreviewFields}`;

export async function getAllPosts(): Promise<Post[]> {
  return await sanity.fetch(allPostsQuery);
}

const postFields = `{
    _id,
    slug, 
    title,
    description,
    readingTime,
    publishedAt, 
    body,
}`;

const postQueryBySlug = `*[_type == "post" && slug == $slug] | order(_updatedAt desc) ${postFields}[0]`;

export async function getPostBySlug(slug: Post["slug"]): Promise<Post> {
  return await sanity.fetch(postQueryBySlug, {
    slug,
  });
}
