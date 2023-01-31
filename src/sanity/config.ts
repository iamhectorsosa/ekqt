import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { useMetaAction } from "./actions/useMetaAction";
import defaultDocumentNode from "./plugins/defaultDocumentNode";
import post from "./schemas/post";

export const sanityConfig = {
  basePath: "/studio",
  projectId: "nlorcasg",
  dataset: "development",
  apiVersion: "2023-01-01",
} as const;

export default defineConfig({
  basePath: sanityConfig.basePath,
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  title: "Hector Sosa",
  schema: {
    types: [post],
  },
  plugins: [deskTool({ defaultDocumentNode })],
  document: {
    actions: [useMetaAction],
  },
});
