import { sanityConfig } from "./config";
import { createClient } from "next-sanity";

const sanity = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  token: sanityConfig.token,
  useCdn: false,
});

export default sanity;
