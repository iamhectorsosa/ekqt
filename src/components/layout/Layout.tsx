import Navbar from "./Navbar";
import Footer from "./Footer";
import Meta, { type MetaProps } from "../Meta";
import Preview from "./Preview";

export default function Layout({
  children,
  title,
  description,
  baseUrl,
  path,
  preview = false,
}: { children: React.ReactNode; preview?: boolean } & MetaProps) {
  return (
    <>
      <Meta
        title={title}
        description={description}
        baseUrl={baseUrl}
        path={path}
      />
      {preview && <Preview />}
      {!preview && <Navbar links={pages} />}
      <main className="container-width py-16">{children}</main>
      {!preview && <Footer links={socials} />}
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
