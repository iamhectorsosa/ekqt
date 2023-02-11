import { NextStudio } from "next-sanity/studio";
import config from "@/sanity/config";
import Meta from "@/components/Meta";

export default function StudioPage() {
  return (
    <>
      <Meta title="Studio" description="Sanity CMS" path="studio" />
      <NextStudio config={config} />
    </>
  );
}
