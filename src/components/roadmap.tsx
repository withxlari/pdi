import { Server, Database, Cloud, Layout, Award } from "lucide-react";
import { Section } from "@/components/section";
import { roadmap } from "@/data/pdi";
import { cn } from "@/lib/utils";

const colors = {
  domino: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  estudando: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/20",
  estudar: "bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/20",
};

const iconMap: Record<string, React.ElementType> = {
  Server,
  Database,
  Cloud,
  Layout,
  Award,
};

export function Roadmap() {
  const totalDomino = roadmap.flatMap(g => g.itens).filter(i => i.nivel === "domino").length;
  const totalEstudando = roadmap.flatMap(g => g.itens).filter(i => i.nivel === "estudando").length;
  const totalEstudar = roadmap.flatMap(g => g.itens).filter(i => i.nivel === "estudar").length;
  const total = totalDomino + totalEstudando + totalEstudar;

  return (
    <Section
      id="roadmap"
      eyebrow="Stack"
      title="Roadmap Técnico"
      description="Tecnologias que pratico, estudo e tenho como próximos passos focados em engenharia de software."
    >
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <div className="card-soft border-emerald-500/20 bg-emerald-500/5 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Tecnologias que domino</p>
          <p className="mt-2 font-display text-4xl font-bold text-emerald-600 dark:text-emerald-400">
            {totalDomino}<span className="text-xl text-emerald-600/50">/{total}</span>
          </p>
        </div>
        <div className="card-soft border-amber-500/20 bg-amber-500/5 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Estudando</p>
          <p className="mt-2 font-display text-4xl font-bold text-amber-600 dark:text-amber-400">
            {totalEstudando}<span className="text-xl text-amber-600/50">/{total}</span>
          </p>
        </div>
        <div className="card-soft border-rose-500/20 bg-rose-500/5 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">Preciso estudar</p>
          <p className="mt-2 font-display text-4xl font-bold text-rose-600 dark:text-rose-400">
            {totalEstudar}<span className="text-xl text-rose-600/50">/{total}</span>
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {roadmap.map((grupo) => {
          const IconComponent = iconMap[grupo.icone] || Server;

          return (
            <div key={grupo.grupo} className="card-soft p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <IconComponent className="size-5" />
                </div>
                <h3 className="font-display text-lg font-bold">{grupo.grupo}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {grupo.itens.map((item) => (
                  <span
                    key={item.nome}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium",
                      colors[item.nivel]
                    )}
                  >
                    <span className={cn("size-1.5 rounded-full", colors[item.nivel].split(" ")[0].replace("/15", ""))} />
                    {item.nome}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}