import Layout from "@/components/layout/Layout";
import { ProseH1 } from "@/components/ui/typography";
import { mdxComponents } from "@/lib/mdxComponents";
import { getSettings } from "@/sanity/queries";
import getMdx from "@/utils/getMdx";
import { InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";

export default function Home({
  socials,
  bioSource,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout socials={socials}>
      <section>
        <header className="mb-6">
          <ProseH1>Welcome</ProseH1>
        </header>
        <div className="space-y-3 text-lg font-light leading-loose">
          <MDXRemote {...bioSource} components={mdxComponents} />
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { bio, socials } = await getSettings();
  const bioSource = await getMdx(bio);
  return {
    props: {
      socials,
      bioSource,
    },
    revalidate: 60,
  };
}
