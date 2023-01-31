import sanityClient from "@sanity/client";
import { sanityConfig } from "./config";

const sanity = sanityClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  token: `${process.env.SANITY_TOKEN}`,
  useCdn: false,
});

export default sanity;
