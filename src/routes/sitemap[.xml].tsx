import { createFileRoute } from "@tanstack/react-router";
import { SITE_ORIGIN } from "../lib/seo";

const staticPaths = ["/", "/servicos", "/processo", "/contato"];

function buildSitemapXML(origin: string, paths: string[]): string {
  const escape = (value: string) =>
    value.replace(
      /[&<>"']/g,
      (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[char]!,
    );

  const urls = paths
    .map((path) => {
      const loc = `${origin.replace(/\/$/, "")}${path}`;
      return `<url><loc>${escape(loc)}</loc></url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        if (!SITE_ORIGIN) {
          return new Response("Sitemap domain not configured", {
            status: 503,
            headers: { "Cache-Control": "no-store" },
          });
        }

        const xml = buildSitemapXML(SITE_ORIGIN, staticPaths);
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
