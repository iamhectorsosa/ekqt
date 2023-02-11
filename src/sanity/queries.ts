import sanity from "./client";
import { type Post } from "./schemas/post";
import { type Settings } from "./schemas/settings";

const postPreviewFields = `{
    _id,
    slug, 
    title, 
    description,
    publishedAt,
}`;

export const allPostsQuery = `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) ${postPreviewFields}`;

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

export const postQueryBySlug = `*[_type == "post" && slug == $slug] | order(_updatedAt desc) ${postFields}[0]`;

export async function getPostBySlug(slug: Post["slug"]): Promise<Post> {
  return await sanity.fetch(postQueryBySlug, {
    slug,
  });
}

const settingsFields = `{
    _id,
    bio,
    socials
}`;

export const settingsQuery = `*[_type == "settings"] | order(_updatedAt desc)[0]`;

export async function getSettings(
  fields: string = settingsFields
): Promise<Settings> {
  return await sanity.fetch(`${settingsQuery} ${fields}`);
}
