import cx from "@/utils/cx";
import Link from "next/link";

type AnchorProps = React.ComponentPropsWithoutRef<"a"> & {
  variant?: "external" | "nav";
};

export default function Anchor({
  children,
  variant,
  href,
  ...props
}: AnchorProps) {
  return (
    <Link
      {...props}
      href={String(href)}
      className={`inline-flex w-fit items-center gap-0.5 whitespace-nowrap border-b border-black px-0.5 py-1 font-light leading-none ring-offset-white hover:text-black/70 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-white dark:ring-offset-black dark:hover:text-white/70
            ${cx(variant === "nav" && "group border-none py-3 text-lg")}
            `}
    >
      {children}
      {/* Arrows for External and Nav */}
      {variant && (
        <svg
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`h-5 w-5 transition-transform ${cx(
            variant === "external" && "-rotate-45",
            variant === "nav" && "group-hover:translate-x-0.5"
          )}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      )}
    </Link>
  );
}
