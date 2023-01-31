import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Meta, { type MetaProps } from "../Meta";

export default function Layout({
  children,
  title,
  description,
  baseUrl,
  path,
}: { children: React.ReactNode } & MetaProps) {
  const {
    query: { preview },
  } = useRouter();
  if (preview) {
    return (
      <div className="py-12">
        <main className="container-width">{children}</main>
      </div>
    );
  }

  return (
    <>
      <Meta
        title={title}
        description={description}
        baseUrl={baseUrl}
        path={path}
      />
      <Navbar links={pages} />
      <main className="container-width py-16">{children}</main>
      <Footer links={socials} />
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
];

const socials = [
  {
    href: "/github",
    label: "GitHub",
  },
  {
    href: "/twitter",
    label: "Twitter",
  },
  {
    href: "/email",
    label: "Email",
  },
];
