import Link from "next/link";
import dayjs from "dayjs";
import { type Post } from "@/sanity/schemas/post";

export default function Card({ post }: { post: Post }) {
  const { slug, title, publishedAt, description } = post;
  return (
    <Link
      className="grid items-center gap-1 py-6 hover:text-black/60 dark:hover:text-white/70 md:grid-cols-[1fr_auto]"
      href={`/blog/${slug}`}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <span className="text-sm font-light">
        {dayjs(publishedAt).format("D MMM YYYY")}
      </span>
      <p className="font-light">{description}</p>
    </Link>
  );
}
