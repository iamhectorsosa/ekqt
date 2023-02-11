import { type SanityDocument } from "@sanity/client";
import { CogIcon, CheckmarkCircleIcon } from "@sanity/icons";
import dayjs from "dayjs";

import { z } from "zod";

const settingsSchema = z.object({
  title: z.string(),
  bio: z.string(),
  socials: z.object({
    github: z.string(),
    twitter: z.string(),
    email: z.string(),
  }),
});

export type Settings = SanityDocument & z.infer<typeof settingsSchema>;

const settings = {
  name: "settings",
  title: "Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "General Settings",
      readOnly: true,
    },
    {
      name: "bio",
      title: "Bio",
      type: "markdown",
    },
    {
      title: "Socials",
      name: "socials",
      type: "object",
      fields: [
        { name: "github", type: "url", title: "GitHub" },
        { name: "twitter", type: "url", title: "Twitter" },
        { name: "email", type: "url", title: "Email" },
      ],
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

export default settings;
