import { motion } from "motion/react";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "APIs", label: "REST e integrações em produção" },
  { value: "-70%", label: "tempo de resposta após refatorações" },
  { value: "24/7", label: "mentalidade de observabilidade" },
];

export function Hero() {
  return (
    <section className="surface-aurora relative overflow-hidden px-5 pb-20 pt-20 sm:pt-28">
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-[var(--shadow-soft)] backdrop-blur"
        >
          <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
          Desenvolvedora back-end · disponível para novos desafios
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-6xl"
        >
          Eu transformo regra de negócio bagunçada em{" "}
          <span className="text-gradient">back-end que dorme tranquilo</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Sou a Larissa Vitória. Trabalho onde o problema realmente mora: modelagem de dados,
          APIs previsíveis e código que a próxima pessoa consegue ler. Aqui você não vê uma lista de
          tecnologias — vê como eu penso quando algo quebra às 2 da manhã.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Button variant="hero" size="xl" asChild>
            <a href="#projetos">
              Ver projetos
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <Button variant="soft" size="xl" asChild>
            <a href="/curriculo-larissa-vitoria.pdf" download>
              <Download className="size-4" aria-hidden="true" />
              Baixar currículo
            </a>
          </Button>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.36 }}
          className="mt-14 grid gap-4 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="card-soft p-5">
              <dt className="font-display text-2xl font-bold text-foreground">{stat.value}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
