import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Larissa Vitória — Desenvolvedora Back-end" },
      {
        name: "description",
        content:
          "Portfólio de Larissa Vitória, desenvolvedora back-end: estudos de caso em formato STAR, radar de aprendizado e código que resolve problemas reais.",
      },
      { property: "og:title", content: "Larissa Vitória — Desenvolvedora Back-end" },
      {
        property: "og:description",
        content:
          "Estudos de caso, arquitetura de APIs e aprendizado contínuo — o portfólio de Larissa Vitória.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
      </main>
      <SiteFooter />
    </div>
  );
}
