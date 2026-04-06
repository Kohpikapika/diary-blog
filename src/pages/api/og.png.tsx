import { ImageResponse } from "@vercel/og";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
  const title = url.searchParams.get("title") ?? "3行日記";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#fafafa",
        }}
      >
        <p style={{ fontSize: 32, color: "#555" }}>3行日記</p>
        <h1 style={{ fontSize: 64, fontWeight: 700 }}>{title}</h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
};