import Layout from "@/components/layout/Layout";
import { ProseH2, ProseInlineCode, ProseP } from "@/components/ui/typography";
import { getSettings } from "@/sanity/queries";
import { InferGetStaticPropsType } from "next";

import fs from "fs";
import path from "path";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from "@/components/components/helpers/CodeBlock";
import { CopyButton } from "@/components/ui/Pre";
import { useTimeout } from "@/hooks";

export default function Hooks({
  socials,
  clipboard,
  timeout,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const timer = useTimeout(() => alert("Hello! 👋🏼"), 2000);
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
              {clipboard}
            </CodeBlock>
          </TabsContent>
        </Tabs>
      </section>
      <section className="my-8 space-y-4">
        <ProseH2>Use Timeout</ProseH2>
        <ProseP>
          Execute a function after a specified delay using{" "}
          <ProseInlineCode>window.setTimeout()</ProseInlineCode> and{" "}
          <ProseInlineCode>window.clearTimeout()</ProseInlineCode>
        </ProseP>
        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview">
            <div className="grid h-[20rem] items-center overflow-scroll rounded-md border border-slate-200 p-6 dark:border-slate-700">
              <div className="flex flex-col items-center justify-center gap-3">
                <button
                  onClick={() => timer.call()}
                  className="flex w-fit items-center justify-center gap-2 rounded border border-slate-500 bg-neutral-100 p-2 px-4 py-3 text-slate-700 transition-transform hover:scale-105 active:scale-95 dark:border-slate-400 dark:bg-neutral-900 dark:text-slate-400"
                >
                  Call Alert after 2 seconds
                </button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="code">
            <CodeBlock
              className="my-0 h-[20rem] overflow-scroll"
              language="tsx"
            >
              {timeout}
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

  const clipboard = fs.readFileSync(
    path.join("src/hooks", "useClipboard" + ".ts"),
    "utf8"
  );

  const timeout = fs.readFileSync(
    path.join("src/hooks", "useTimeout" + ".ts"),
    "utf8"
  );

  return {
    props: {
      socials,
      clipboard,
      timeout,
    },
    revalidate: 60,
  };
}
