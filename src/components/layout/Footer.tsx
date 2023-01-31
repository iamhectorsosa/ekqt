import dayjs from "dayjs";
import Anchor from "../UI/Anchor";

type FooterProps = {
  links?: Array<{
    href: string;
    label: string;
  }>;
};

export default function Footer({ links }: FooterProps) {
  return (
    <footer
      aria-label="Footer"
      className="mt-6 border-t border-stone-500 pb-16"
    >
      <div className="container-width flex w-full flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div aria-label="Copyright" className="text-lg font-semibold">
          {`© ${dayjs().format("YYYY")} Hector Sosa`}
        </div>
        <div className="flex flex-col gap-3 font-light lg:flex-row lg:gap-6">
          {links?.map(({ href, label }, index) => (
            <Anchor key={index} variant="external" href={href} target="_blank">
              {label}
            </Anchor>
          ))}
        </div>
      </div>
    </footer>
  );
}
