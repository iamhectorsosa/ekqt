import Layout from "@/components/layout/Layout";
import { ProseH1 } from "@/components/ui/typography";
import { mdxComponents } from "@/lib/mdxComponents";
import { getSettings } from "@/sanity/queries";
import getMdx from "@/utils/getMdx";
import { InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";

export default function Home({
  settings,
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout socials={settings.socials}>
      <section>
        <header className="mb-6">
          <ProseH1>Welcome</ProseH1>
        </header>
        <div className="space-y-3 text-lg font-light leading-loose">
          <MDXRemote {...source} components={mdxComponents} />
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
