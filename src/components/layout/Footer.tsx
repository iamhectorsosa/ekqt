import { Settings } from "@/sanity/schemas/settings";
import dayjs from "dayjs";
import Anchor from "../ui/Anchor";
import { ProseStrong } from "../ui/typography";

type FooterProps = {
  socials: Settings["socials"];
};

export default function Footer({ socials }: FooterProps) {
  return (
    <footer
      aria-label="Footer"
      className="mt-6 border-t border-stone-500 pb-16"
    >
      <div className="container-width flex w-full flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <ProseStrong aria-label="Copyright" className="text-lg">
          {`© ${dayjs().format("YYYY")} Hector Sosa`}
        </ProseStrong>
        <div className="flex flex-col gap-3 font-light capitalize lg:flex-row lg:gap-6">
          {Object.entries(socials).map(([key, value], index) => (
            <Anchor key={index} variant="external" href={value} target="_blank">
              {key}
            </Anchor>
          ))}
        </div>
      </div>
    </footer>
  );
}
