import Layout from "@/components/layout/Layout";
import { ProseH2, ProseInlineCode, ProseP } from "@/components/ui/typography";
import { mdxComponents } from "@/lib/mdxComponents";
import { getSettings } from "@/sanity/queries";
import getMdx from "@/utils/getMdx";
import { InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";

import fs from "fs";
import path from "path";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from "@/components/components/helpers/CodeBlock";
import { CopyButton } from "@/components/ui/Pre";

export default function Hooks({
  socials,
  component,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      title="Hooks"
      description="The starting point for your MDX Content"
      path="hooks"
      socials={socials}
    >
      <section className="my-8 space-y-4">
        <ProseH2>Copy to Clipboard</ProseH2>
        <ProseP>
          Interact with <ProseInlineCode>navigation.clipboard</ProseInlineCode>{" "}
          using a custom React Hook
        </ProseP>
        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview">
            <div className="grid h-[20rem] items-center overflow-scroll rounded-md border border-slate-200 p-6 dark:border-slate-700">
              <div className="flex flex-col justify-center gap-3">
                <ProseP>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus numquam iusto laborum est earum nostrum fugit,
                  quis quasi perspiciatis, molestiae animi id obcaecati totam
                  cum! Similique nobis doloribus non numquam?
                </ProseP>

                <CopyButton
                  code="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatibus numquam iusto laborum est earum nostrum fugit, quis
                quasi perspiciatis, molestiae animi id obcaecati totam cum!
                Similique nobis doloribus non numquam?"
                  className="border-slate-500 px-4 py-3"
                >
                  Copy to Clipboard
                </CopyButton>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="code">
            <CodeBlock
              className="my-0 h-[20rem] overflow-scroll"
              language="tsx"
            >
              {component}
            </CodeBlock>
          </TabsContent>
        </Tabs>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { socials } = await getSettings(`{
    _id,
    socials
  }`);

  const component = fs.readFileSync(
    path.join("src/lib", "hooks" + ".ts"),
    "utf8"
  );

  return {
    props: {
      socials,
      component,
    },
    revalidate: 60,
  };
}
