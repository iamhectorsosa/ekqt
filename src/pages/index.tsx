import Layout from "@/components/layout/Layout";
import Anchor from "@/components/UI/Anchor";
import { getSettings } from "@/sanity/queries";
import getMdx from "@/utils/getMdx";
import { InferGetStaticPropsType } from "next";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

const components = {
  Anchor: Anchor,
  a: Anchor,
} as MDXRemoteProps["components"];

export default function Home({
  settings,
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout socials={settings.socials}>
      <section>
        <header className="mb-6">
          <h2 className="text-3xl font-bold sm:text-4xl">Welcome</h2>
        </header>
        <div className="space-y-3 text-lg font-light leading-loose">
          <MDXRemote {...source} components={components} />
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const settings = await getSettings();
  const source = await getMdx(settings.bio);

  return {
    props: {
      settings,
      source,
    },
    revalidate: 60,
  };
}
