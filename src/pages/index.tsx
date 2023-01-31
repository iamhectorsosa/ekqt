import Layout from "@/components/layout/Layout";
import Anchor from "@/components/UI/Anchor";

export default function Home() {
  return (
    <Layout>
      <section>
        <header className="mb-6">
          <h2 className="text-3xl font-bold sm:text-4xl">Welcome</h2>
        </header>
        <div className="space-y-3 text-lg font-light leading-loose">
          <p>
            Thanks for stopping by, my name is Hector and I&apos;m a Software
            Engineer based in Prague originally from Honduras. I&apos;m
            passionate about crafting user interfaces and making technology
            accessible for everyone.
          </p>
          <p>
            Currently working as a React/TypeScript Developer at{" "}
            <Anchor target="_blank" href="https://webscope.io">
              Webscope
            </Anchor>
            .
          </p>
          <p>
            Technologies being used for this project are:{" "}
            <Anchor target="_blank" href="https://nextjs.org/">
              Next 13
            </Anchor>{" "}
            as the React framework of choice,{" "}
            <Anchor target="_blank" href="https://tailwindcss.com/">
              TailwindCSS v3
            </Anchor>{" "}
            for styling, and{" "}
            <Anchor target="_blank" href="https://www.sanity.io/">
              Sanity
            </Anchor>{" "}
            as the headless and local content management system.
          </p>
          <Anchor variant="nav" href="/blog">
            Read my Blog here
          </Anchor>
        </div>
      </section>
    </Layout>
  );
}
