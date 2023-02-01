import { ImageResponse } from "@vercel/og";
import { type NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Hector Sosa";

    const hasPath = searchParams.has("path");
    const path = hasPath ? String(searchParams.get("path")?.slice(0, 100)) : "";

    const fontData = await fetch(
      new URL("../../../public/Inter-Bold.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            fontFamily: '"Inter"',
            display: "flex",
            height: "100%",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
            letterSpacing: "-0.05em",
            textAlign: "center",
            color: "#f8fafc",
            backgroundColor: "#0f172a",
          }}
        >
          <h1
            style={{
              width: "auto",
              fontSize: 90,
              padding: "8px 0",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              width: "auto",
              fontSize: 30,
            }}
          >
            {`hectorsosa.me/${path}`}
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: "Inter",
            data: fontData,
            style: "normal",
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
