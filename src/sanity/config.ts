import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { useMetaAction } from "./actions/useMetaAction";
import defaultDocumentNode from "./plugins/defaultDocumentNode";
import { markdownSchema } from "./plugins/markdown";
import post from "./schemas/post";
import settings from "./schemas/settings";

export const sanityConfig = {
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.SANITY_TOKEN,
};

export default defineConfig({
  basePath: sanityConfig.basePath,
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  title: "Hector Sosa",
  schema: {
    types: [post, settings],
  },
  plugins: [deskTool({ defaultDocumentNode }), markdownSchema()],
  document: {
    actions: (prev, context) => {
      switch (context.schemaType) {
        case "post":
          return [...prev, useMetaAction];
        case "settings":
          return prev.filter(
            ({ action }) => action !== "delete" && action !== "unpublish"
          );
        default:
          return prev;
      }
    },
  },
});
