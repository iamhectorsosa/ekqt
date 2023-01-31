import { type SanityDocument } from "@sanity/client";
import { BookIcon } from "@sanity/icons";
import dayjs from "dayjs";

import { z } from "zod";

const postSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  publishedAt: z.string(),
  readingTime: z.number(),
  body: z.string(),
});

export type Post = SanityDocument & z.infer<typeof postSchema>;

const post = {
  name: "post",
  title: "Post",
  type: "document",
  icon: BookIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
      readOnly: true,
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      options: {
        timeStep: 60,
      },
    },
    {
      name: "readingTime",
      title: "Reading Time",
      type: "number",
      initialValue: 0,
      readOnly: true,
    },
    {
      name: "body",
      title: "Body",
      type: "text",
    },
  ],

  preview: {
    select: {
      title: "title",
      date: "_updatedAt",
    },
    prepare({ title, date }: Record<string, string>) {
      return {
        title: title,
        subtitle: date && dayjs(date).format("MMMM DD, YYYY"),
      };
    },
  },
};

export default post;
