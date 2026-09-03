import { motion } from "motion/react";
import { Building2, Briefcase, CalendarDays, Github, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { perfil } from "@/data/pdi";

function diffPartes(from: Date, to: Date) {
  if (isNaN(from.getTime()) || isNaN(to.getTime())) {
    return { a: 0, m: 0, d: 0 };
  }

  let anos = to.getFullYear() - from.getFullYear();
  let meses = to.getMonth() - from.getMonth();
  let dias = to.getDate() - from.getDate();
  
  if (dias < 0) {
    meses -= 1;
    dias += new Date(to.getFullYear(), to.getMonth(), 0).getDate();
  }
  if (meses < 0) {
    anos -= 1;
    meses += 12;
  }
  return {
    a: Math.max(0, anos),
    m: Math.max(0, meses),
    d: Math.max(0, dias),
  };
}

function Contador({ label, valor }: { label: string; valor: { a: number; m: number; d: number } }) {
  return (
    <div className="rounded-2xl border border-border bg-background/60 p-4">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 flex items-baseline gap-2 font-display text-2xl font-bold text-primary">
        {valor.a}
        <span className="text-xs font-medium text-muted-foreground">a</span>
        {valor.m}
        <span className="text-xs font-medium text-muted-foreground">m</span>
        {valor.d}
        <span className="text-xs font-medium text-muted-foreground">d</span>
      </p>
    </div>
  );
}

export function Hero() {
  const hoje = new Date();
  const inicio = new Date(perfil.dataInicioISO);
  const fim = new Date(perfil.dataFimISO);
  
  const decorrido = diffPartes(inicio, hoje > inicio ? hoje : inicio);
  const restante = diffPartes(hoje < fim ? hoje : fim, fim);

  return (
    <section id="sobre" className="surface-aurora relative overflow-hidden px-5 pb-12 pt-12 sm:pt-16">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-10 lg:grid-cols-[1.15fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground shadow-[var(--shadow-soft)] backdrop-blur">
            <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
            Plano de Desenvolvimento Individual
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl">
            Olá, eu sou <span className="text-gradient">{perfil.primeiroNome} {perfil.sobrenome}</span>
          </h1>

          <p className="mt-4 font-display text-xl font-bold text-foreground sm:text-2xl">
            {perfil.cargo}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{perfil.stackResumo}</p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{perfil.bio}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="hero" size="lg" asChild>
              <a href={perfil.github} target="_blank" rel="noreferrer">
                <Github className="size-4" aria-hidden="true" />
                GitHub
              </a>
            </Button>
            <Button variant="soft" size="lg" asChild>
              <a href={perfil.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="size-4" aria-hidden="true" />
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="card-soft p-6 shadow-[var(--shadow-glow)]"
        >
          <div className="flex items-center gap-4">
            {perfil.fotoUrl ? (
              <img
                src={perfil.fotoUrl}
                alt={`Foto de ${perfil.nomeCompleto}`}
                className="size-14 rounded-full object-cover"
              />
            ) : (
              <span className="grid size-14 place-items-center rounded-full bg-[image:var(--gradient-primary)] font-display text-lg font-bold text-primary-foreground">
                {perfil.primeiroNome.charAt(0)}
                {perfil.sobrenome.charAt(0)}
              </span>
            )}
            <div>
              <p className="font-display text-lg font-bold">{perfil.nomeCompleto}</p>
              <p className="text-sm text-muted-foreground">{perfil.cargo}</p>
            </div>
          </div>

          <dl className="mt-6 space-y-2.5 text-sm">
            <div className="flex items-center gap-2.5">
              <Building2 className="size-4 text-primary" aria-hidden="true" />
              <dd>{perfil.empresa}</dd>
            </div>
            <div className="flex items-center gap-2.5">
              <Briefcase className="size-4 text-primary" aria-hidden="true" />
              <dd>{perfil.area}</dd>
            </div>
            <div className="flex items-center gap-2.5">
              <CalendarDays className="size-4 text-primary" aria-hidden="true" />
              <dd>
                {perfil.periodoInicio} — {perfil.periodoFim}
              </dd>
            </div>
          </dl>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Contador label="Tempo decorrido" valor={decorrido} />
            <Contador label="Tempo restante" valor={restante} />
          </div>

          <p className="mt-5 text-xs text-muted-foreground">
            Última atualização: {perfil.ultimaAtualizacao}
          </p>
        </motion.aside>
      </div>
    </section>
  );
}