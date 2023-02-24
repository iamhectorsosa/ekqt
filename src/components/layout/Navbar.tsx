import Link from "next/link";
import Anchor from "../UI/Anchor";
import { pages } from "./Layout";
import { useRouter } from "next/router";

type NavbarProps = {
  links?: Array<{
    href: string;
    label: string;
  }>;
};

export default function Navbar({ links }: NavbarProps) {
  const router = useRouter();
  return (
    <nav
      aria-label="Main Navigation"
      className="border-b border-stone-500 pt-16"
    >
      <div className="container-width grid gap-3">
        <Link href="/">
          <h2 className="w-fit text-2xl font-bold md:text-3xl">
            {router.pathname === "/"
              ? "Hector Sosa"
              : pages
                  .filter((i) => i.href !== "/")
                  .find((i) => router.pathname.includes(i.href))?.label}
          </h2>
        </Link>
        <div className="flex items-center justify-end gap-3">
          {links?.map(({ href, label }, index) => (
            <Anchor href={href} key={index}>
              {label}
            </Anchor>
          ))}
        </div>
      </div>
    </nav>
  );
}
