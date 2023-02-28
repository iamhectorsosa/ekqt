import Layout from "@/components/layout/Layout";
import { ProseH1, ProseH2 } from "@/components/ui/typography";
import { mdxComponents } from "@/lib/mdxComponents";
import { getSettings } from "@/sanity/queries";
import getMdx from "@/utils/getMdx";
import { InferGetStaticPropsType } from "next";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

import fs from "fs";
import path from "path";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProseH1 as component } from "@/components/ui/library/ProseH1";
import Pre from "@/components/ui/Pre";

export const ProseComponent = {
  h1: component,
  pre: Pre,
} as MDXRemoteProps["components"];

export default function Home({
  settings,
  source,
  testSource,
  componentSource,
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
        <div className="my-8 space-y-4">
          <ProseH2>Test - Heading 1</ProseH2>
          <Tabs defaultValue="preview">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <div className="my-6 grid h-96 place-content-center overflow-scroll rounded-md border border-slate-200 p-6 dark:border-slate-700">
                <MDXRemote {...testSource} components={mdxComponents} />
              </div>
            </TabsContent>
            <TabsContent value="code">
              <div className="h-[25.5rem] overflow-scroll">
                <MDXRemote {...componentSource} components={ProseComponent} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const settings = await getSettings();
  const source = await getMdx(settings.bio);

  const component = fs.readFileSync(
    path.join("src/components/ui/library", "ProseH1" + ".tsx"),
    "utf8"
  );

  const testSource = await getMdx(
    "# Lorem Ipsum \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptas quod nostrum, officiis expedita culpa praesentium inventore ex exercitationem explicabo architecto accusantium adipisci optio ab voluptates? Voluptatem tenetur qui ipsum."
  );

  const componentSource = await getMdx("```tsx\n" + component + "\n```");

  return {
    props: {
      settings,
      source,
      testSource,
      componentSource,
    },
    revalidate: 60,
  };
}
