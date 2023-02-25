import Link from "next/link";
import dayjs from "dayjs";
import { type Post } from "@/sanity/schemas/post";
import { ProseH4, ProseP, ProseSubtle } from "./typography";

export default function Card({ post }: { post: Post }) {
  const { slug, title, publishedAt, description } = post;
  return (
    <Link
      className="grid items-center gap-1.5 py-7 hover:text-black/60 dark:hover:text-white/70 md:grid-cols-[1fr_auto]"
      href={`/blog/${slug}`}
    >
      <ProseH4 className="mt-0">{title}</ProseH4>
      <ProseSubtle>{dayjs(publishedAt).format("D MMM YYYY")}</ProseSubtle>
      <ProseP className="[&:not(:first-of-type)]:mt-0">{description}</ProseP>
    </Link>
  );
}
