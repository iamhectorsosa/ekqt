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

export default function Components({
  socials,
  source,
  component,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      title="Components"
      description="The starting point for your MDX Content"
      path="components"
      socials={socials}
    >
      <section className="my-8 space-y-4">
        <ProseH2>Typography</ProseH2>
        <ProseP>
          This is the typography used for this project. You will be able to find
          all of the styles with the <i>exception</i> of the custom{" "}
          <ProseInlineCode>Pre</ProseInlineCode> component. All of the
          components have have their refs exposed and support overwriting of
          styles using TailwindCSS.
        </ProseP>
        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview">
            <div className="grid h-[60rem] place-content-center overflow-scroll rounded-md border border-slate-200 p-6 dark:border-slate-700">
              <MDXRemote {...source} components={mdxComponents} />
            </div>
          </TabsContent>
          <TabsContent value="code">
            <CodeBlock className="h-[60rem] overflow-scroll" language="tsx">
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

  const source = await getMdx(
    `# Heading 1
    ## Heading 2
    ### Heading 3
    #### Heading 4
    Emphasis, aka italics, with *asterisks* or _underscores_.
    Strong emphasis, aka bold, with **asterisks** or __underscores__.
    Combined emphasis with **asterisks and _underscores_**. 
    Strikethrough uses two tildes.
    * Unordered list can use asterisks (*)
    * Or minuses (-)
    * Or pluses (+)
    
    [I'm an inline-style link](https://www.google.com) and inline \`code\` has \`back-ticks around\` it.

    \`\`\`js
    var s = "JavaScript syntax highlighting";
    alert(s);
    \`\`\`
    The syntax highlighting also has support for dark mode.
    > Blockquotes are very handy in email to emulate reply text.
    `
  );

  const component = fs.readFileSync(
    path.join("src/components/ui", "typography" + ".tsx"),
    "utf8"
  );

  return {
    props: {
      socials,
      component,
      source,
    },
    revalidate: 60,
  };
}
