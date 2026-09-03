import { 
  BookOpen, 
  Users, 
  MessageSquare, 
  Zap, 
  Target, 
  Layers, 
  ListChecks, 
  FileText, 
  Sparkles, 
  Workflow, 
  Rocket, 
  Activity 
} from "lucide-react";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { softSkillsPratico, softSkillsEvolucao } from "@/data/pdi";

const iconMap: Record<string, React.ElementType> = {
  ListChecks,
  BookOpen,
  Users,
  Zap,
  FileText,
  MessageSquare,
  Sparkles,
  Workflow,
  Layers,
  Rocket,
  Target,
  Activity,
};

export function SoftSkills() {
  return (
    <Section
      id="soft-skills"
      eyebrow="Comportamental"
      title="Soft Skills"
      description="As habilidades humanas que sustentam minha evolução técnica."
    >
      <div className="mb-12">
        <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Habilidades</h3>
        <h4 className="mb-6 font-display text-3xl font-bold">Já pratico</h4>
        <p className="mb-8 text-sm text-muted-foreground">Soft skills que aplico no meu dia a dia profissional.</p>
        
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {softSkillsPratico.map((skill) => {
            const Icon = iconMap[skill.icone] || Zap;
            return (
              <div key={skill.titulo} className="card-soft p-6">
                <div className="mb-4 inline-flex rounded-lg bg-emerald-500/10 p-2.5 text-emerald-500">
                  <Icon className="size-5" />
                </div>
                <h5 className="mb-2 font-display text-lg font-bold">{skill.titulo}</h5>
                <p className="mb-6 text-sm text-muted-foreground">{skill.descricao}</p>
                <div className="mt-auto">
                  <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-transparent">
                    Já pratico
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Em Evolução</h3>
        <h4 className="mb-6 font-display text-3xl font-bold">Em desenvolvimento</h4>
        <p className="mb-8 text-sm text-muted-foreground">Habilidades em construção contínua.</p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {softSkillsEvolucao.map((skill) => {
            const Icon = iconMap[skill.icone] || Target;
            return (
              <div key={skill.titulo} className="card-soft p-6">
                <div className="mb-4 inline-flex rounded-lg bg-purple-500/10 p-2.5 text-purple-500">
                  <Icon className="size-5" />
                </div>
                <h5 className="mb-2 font-display text-lg font-bold">{skill.titulo}</h5>
                <p className="mb-6 text-sm text-muted-foreground">{skill.descricao}</p>
                <div className="mt-auto">
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-600 hover:bg-purple-500/20 border-transparent">
                    Em desenvolvimento
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}