import Layout from "@/components/layout/Layout";
import Anchor from "@/components/ui/Anchor";
import Pre from "@/components/ui/Pre";
import {
  ProseH1,
  ProseH2,
  ProseH3,
  ProseH4,
  ProseP,
  ProseBlockquote,
  ProseUL,
  ProseInlineCode,
  ProseStrong,
  ProseAnchor,
} from "@/components/ui/typography";
import { getSettings } from "@/sanity/queries";
import getMdx from "@/utils/getMdx";
import { InferGetStaticPropsType } from "next";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

const components = {
  Anchor: Anchor,
  pre: Pre,
  h1: ProseH1,
  h2: ProseH2,
  h3: ProseH3,
  h4: ProseH4,
  p: ProseP,
  a: ProseAnchor,
  strong: ProseStrong,
  blockquote: ProseBlockquote,
  ul: ProseUL,
  code: ProseInlineCode,
} as MDXRemoteProps["components"];

export default function Home({
  settings,
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout socials={settings.socials}>
      <section>
        <header className="mb-6">
          <ProseH2>Welcome</ProseH2>
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
