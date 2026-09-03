import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import { Eventos } from "@/components/eventos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Larissa Vitória — Plano de Desenvolvimento Individual" },
      {
        name: "description",
        content:
          "Plano de Desenvolvimento Individual e foco em Back-end, automação e arquitetura de sistemas.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="pb-10">
      <Hero />
      <Eventos />
    </div>
  );
}