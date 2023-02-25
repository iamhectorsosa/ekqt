import Link from "next/link";
import Anchor from "../ui/Anchor";
import { pages } from "./Layout";
import { useRouter } from "next/router";
import { ProseH2 } from "../ui/typography";

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
          <ProseH2>
            {router.pathname === "/"
              ? "Hector Sosa"
              : pages
                  .filter((i) => i.href !== "/")
                  .find((i) => router.pathname.includes(i.href))?.label}
          </ProseH2>
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
