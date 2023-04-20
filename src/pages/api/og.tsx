/* eslint-disable @next/next/no-img-element */
import { ImageResponse, type NextRequest } from "next/server";
import { CSSProperties, ComponentPropsWithoutRef } from "react";

export const config = {
  runtime: "edge",
};

const AnchorIcon = (
  props: Omit<ComponentPropsWithoutRef<"svg">, "viewBox">
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
      />
    </svg>
  );
};

type HrefComponent = {
  path: string;
};

const HrefComponent = ({ path }: HrefComponent) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        margin: "0",
        padding: "0",
      }}
    >
      <AnchorIcon
        style={{
          height: "24px",
          width: "24px",
        }}
      />
      <span
        style={{
          fontSize: 24,
          fontWeight: 500,
          padding: "0",
          margin: "0",
        }}
      >
        {`hectorsosa.me/${path}`}
      </span>
    </div>
  );
};

const GitHubIcon = (
  props: Omit<ComponentPropsWithoutRef<"svg">, "viewBox">
) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"
          stroke-width="0"
          fill="currentColor"
        ></path>
      </svg>
    </>
  );
};

const TwitterIcon = (
  props: Omit<ComponentPropsWithoutRef<"svg">, "viewBox">
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z"
        stroke-width="0"
        fill="currentColor"
      ></path>
    </svg>
  );
};

type SocialComponentProps = {
  social: "GitHub" | "Twitter";
  username: string;
};

const SocialComponent = ({ social, username }: SocialComponentProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "9px",
      }}
    >
      {social === "GitHub" && (
        <GitHubIcon
          style={{
            height: "30px",
            width: "30px",
          }}
        />
      )}
      {social === "Twitter" && (
        <TwitterIcon
          style={{
            height: "30px",
            width: "30px",
          }}
        />
      )}
      <span
        style={{
          fontSize: 30,
          fontWeight: 700,
        }}
      >
        {username}
      </span>
    </div>
  );
};

type TagComponentProps = {
  label: string;
  background: CSSProperties["background"];
};

const TagComponent = ({ label, background }: TagComponentProps) => {
  return (
    <span
      style={{
        background,
        padding: "9px 18px",
        borderRadius: "18px",
        fontSize: "16px",
        fontWeight: 700,
        color: "#f8fafc",
        textTransform: "uppercase",
        letterSpacing: "0",
        opacity: "0.9",
      }}
    >
      {label}
    </span>
  );
};

type TitleComponentProps = {
  title: string;
};

const TitleComponent = ({ title }: TitleComponentProps) => {
  return (
    <span
      style={{
        fontSize: 80,
        fontWeight: 700,
        lineHeight: "80",
        letterSpacing: "-0.04em",
      }}
    >
      {title}
    </span>
  );
};

type ImageComponentProps = {
  path: string;
  title: string;
  hasTags: boolean;
};

const ImageComponent = ({ path, title, hasTags }: ImageComponentProps) => {
  return (
    <div
      style={{
        fontFamily: '"Inter"',
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "60px",
        textAlign: "center",
        color: "#f8fafc",
        backgroundColor: "#1e293b",
      }}
    >
      {/* Blue Blob */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 300,
          backgroundColor: "#80afff",
          filter: "blur(90px)",
          opacity: "0.5",
        }}
      ></div>
      {/* Purple Blob */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: 300,
          top: "30%",
          left: "40%",
          backgroundColor: "#9089fc",
          filter: "blur(90px)",
          opacity: "0.5",
        }}
      ></div>
      {/* Plus Grid */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 300,
          top: "-26%",
          left: "64%",
          opacity: "0.5",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.29'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          top: "60px",
          left: "60px",
        }}
      >
        <HrefComponent path={path} />
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: `${path && hasTags ? "flex-start" : "center"}`,
          justifyContent: `${path && hasTags ? "flex-end" : "center"}`,
          gap: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            paddingRight: `${path && hasTags ? "120px" : "0"}`,
            textAlign: `${path && hasTags ? "start" : "center"}`,
            paddingTop: `${path && hasTags ? "0" : "24px"}`,
          }}
        >
          <TitleComponent title={title} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <SocialComponent social="GitHub" username="@ekqt" />
            <SocialComponent social="Twitter" username="@_ekqt" />
          </div>
          {path && hasTags && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <TagComponent
                label="React"
                background="linear-gradient(to right, #4f46e5, #0891b2)"
              />
              <TagComponent
                label="Next"
                background="linear-gradient(to right, #ca8a04, #dc2626)"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? String(searchParams.get("title")?.slice(0, 100))
      : "Hector Sosa";

    const hasPath = searchParams.has("path");
    const path = hasPath ? String(searchParams.get("path")?.slice(0, 100)) : "";

    const hasTags = hasPath;

    console.log(path);

    const interMedium = await fetch(
      new URL("../../../public/Inter-Medium.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    const interBold = await fetch(
      new URL("../../../public/Inter-Bold.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      <ImageComponent path={path} title={title} hasTags={hasTags} />,
      {
        debug: false,
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: interMedium,
            style: "normal",
            weight: 500,
          },
          {
            name: "Inter",
            data: interBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (error) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
