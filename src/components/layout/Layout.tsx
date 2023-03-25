import Navbar from "./Navbar";
import Footer from "./Footer";
import Meta, { type MetaProps } from "../Meta";
import Preview from "./Preview";
import { Settings } from "@/sanity/schemas/settings";

export default function Layout({
  children,
  title,
  description,
  baseUrl,
  path,
  socials,
  preview = false,
}: {
  children: React.ReactNode;
  socials: Settings["socials"];
  preview?: boolean;
} & MetaProps) {
  return (
    <>
      <Meta
        title={title}
        description={description}
        baseUrl={baseUrl}
        path={path}
      />
      {preview && <Preview />}
      <Navbar links={pages} />
      <main className="container-width py-16">{children}</main>
      <Footer socials={socials} />
    </>
  );
}

export const pages = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/components",
    label: "Components",
  },
  {
    href: "/hooks",
    label: "Hooks",
  },
];
