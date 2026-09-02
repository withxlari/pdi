/**
 * ============================================================
 *  DADOS DO PDI — edite APENAS este arquivo para trocar o conteúdo.
 *  Todos os textos abaixo são placeholders. Substitua pelos seus.
 * ============================================================
 */

export const perfil = {
  nomeCompleto: "Larissa Vitória",
  primeiroNome: "Larissa",
  sobrenome: "Vitória",
  cargo: "Desenvolvedora Back-end",
  stackResumo: "Java | Spring Boot | AWS | SQL",
  empresa: "Sua empresa aqui",
  area: "Desenvolvimento Backend / Cloud",
  periodoInicio: "jan. de 2026",
  periodoFim: "jan. de 2027",
  // Use formato ISO (AAAA-MM-DD) — os contadores de tempo usam estas datas.
  dataInicioISO: "2026-01-01",
  dataFimISO: "2027-01-01",
  ultimaAtualizacao: "02 de Setembro de 2026",
  bio:
    "Escreva aqui um parágrafo sobre você: o que te move na tecnologia, no que você está focando agora e que tipo de impacto você quer gerar.",
  github: "https://github.com/seu-usuario",
  linkedin: "https://linkedin.com/in/seu-usuario",
  // Opcional: URL de uma foto sua. Deixe vazio para exibir as iniciais.
  fotoUrl: "",
};

export type Evento = {
  titulo: string;
  tipo: string;
  descricao: string;
  data: string;
  local: string;
  tags: string[];
  link?: string;
};

export const eventos: Evento[] = [
  {
    titulo: "Nome do evento 1",
    tipo: "Hackathon",
    descricao: "Conte em uma ou duas frases o que você fez e aprendeu neste evento.",
    data: "Fevereiro 2026",
    local: "Cidade / Empresa",
    tags: ["Tag 1", "Tag 2"],
    link: "#",
  },
  {
    titulo: "Nome do evento 2",
    tipo: "Summit",
    descricao: "Conte em uma ou duas frases o que você fez e aprendeu neste evento.",
    data: "Outubro 2025",
    local: "Cidade",
    tags: ["Tag 1"],
    link: "#",
  },
  {
    titulo: "Nome do evento 3",
    tipo: "Meetup",
    descricao: "Conte em uma ou duas frases o que você fez e aprendeu neste evento.",
    data: "Janeiro 2026",
    local: "Cidade",
    tags: ["Tag 1", "Tag 2"],
  },
];

export type Etapa = { etapa: string; titulo: string; foco: string; atual?: boolean };

export const trajetoria: Etapa[] = [
  { etapa: "Etapa 1", titulo: "Estagiária", foco: "Foco: fundamentos, linguagem principal e boas práticas", atual: true },
  { etapa: "Etapa 2", titulo: "Desenvolvedora Júnior", foco: "Foco: APIs REST, testes e microsserviços" },
  { etapa: "Etapa 3", titulo: "Desenvolvedora Pleno", foco: "Foco: arquitetura, cloud e sistemas distribuídos" },
  { etapa: "Etapa 4", titulo: "Desenvolvedora Sênior", foco: "Foco: decisões técnicas, liderança e escalabilidade" },
  { etapa: "Etapa 5", titulo: "Tech Lead ou Especialista", foco: "Foco: arquitetura de soluções, mentoria e impacto estratégico" },
];

export const metasEmAndamento: string[] = [
  "Primeira meta em andamento",
  "Segunda meta em andamento",
  "Terceira meta em andamento",
  "Quarta meta em andamento",
];

export type StatusMeta = "planejado" | "progresso" | "concluido";

export type Meta = {
  titulo: string;
  categoria: string;
  descricao: string;
  progresso: number;
  prioridade: "Alta" | "Média" | "Baixa";
  status: StatusMeta;
  prazo: string; // AAAA-MM-DD
};

export const metas: Meta[] = [
  {
    titulo: "Título da meta concluída",
    categoria: "Categoria",
    descricao: "Descreva de forma objetiva o que precisa ser feito para concluir esta meta.",
    progresso: 100,
    prioridade: "Alta",
    status: "concluido",
    prazo: "2026-07-30",
  },
  {
    titulo: "Título da meta em progresso",
    categoria: "Cloud",
    descricao: "Descreva de forma objetiva o que precisa ser feito para concluir esta meta.",
    progresso: 55,
    prioridade: "Alta",
    status: "progresso",
    prazo: "2026-10-15",
  },
  {
    titulo: "Título da meta planejada",
    categoria: "Backend",
    descricao: "Descreva de forma objetiva o que precisa ser feito para concluir esta meta.",
    progresso: 5,
    prioridade: "Média",
    status: "planejado",
    prazo: "2026-12-01",
  },
];

export type Contribuicao = {
  titulo: string;
  categoria: string;
  situacao: string;
  descricao: string;
  tags: string[];
  impactos: string[];
};

export const categoriasContribuicao = ["Backend", "Cloud", "Infra", "Estudos", "Projetos", "Comunidade"];

export const contribuicoes: Contribuicao[] = [
  {
    titulo: "Nome do estudo ou projeto",
    categoria: "Estudos",
    situacao: "Em andamento",
    descricao: "Explique o que é, por que você começou e onde está hoje.",
    tags: ["Tag 1", "Tag 2"],
    impactos: ["Impacto 1", "Impacto 2"],
  },
  {
    titulo: "Participação em comunidades",
    categoria: "Comunidade",
    situacao: "Em andamento",
    descricao: "Explique como você participa e o que compartilha com a comunidade.",
    tags: ["LinkedIn", "Eventos"],
    impactos: ["Construção de marca pessoal", "Networking"],
  },
  {
    titulo: "Nome do projeto prático",
    categoria: "Projetos",
    situacao: "Em andamento",
    descricao: "Explique o problema resolvido, a solução e o resultado obtido.",
    tags: ["Tag 1", "Tag 2"],
    impactos: ["Impacto principal do projeto"],
  },
];

export type NivelSkill = "domino" | "estudando" | "estudar";

export type GrupoRoadmap = {
  grupo: string;
  itens: { nome: string; nivel: NivelSkill }[];
};

export const roadmap: GrupoRoadmap[] = [
  {
    grupo: "Backend",
    itens: [
      { nome: "Tecnologia que domino", nivel: "domino" },
      { nome: "Tecnologia que estudo", nivel: "estudando" },
      { nome: "Tecnologia que preciso estudar", nivel: "estudar" },
    ],
  },
  {
    grupo: "Data Engineering",
    itens: [
      { nome: "Tecnologia 1", nivel: "estudar" },
      { nome: "Tecnologia 2", nivel: "estudando" },
    ],
  },
  {
    grupo: "Cloud",
    itens: [
      { nome: "Tecnologia 1", nivel: "domino" },
      { nome: "Tecnologia 2", nivel: "estudando" },
    ],
  },
];

export type SoftSkill = { titulo: string; descricao: string };

export const softSkillsPratico: SoftSkill[] = [
  { titulo: "Organização", descricao: "Descreva como essa habilidade aparece no seu dia a dia." },
  { titulo: "Aprendizado contínuo", descricao: "Descreva como essa habilidade aparece no seu dia a dia." },
  { titulo: "Trabalho em equipe", descricao: "Descreva como essa habilidade aparece no seu dia a dia." },
];

export const softSkillsEvolucao: SoftSkill[] = [
  { titulo: "Comunicação", descricao: "Descreva o que você está praticando para evoluir aqui." },
  { titulo: "Visão de arquitetura", descricao: "Descreva o que você está praticando para evoluir aqui." },
  { titulo: "Priorização", descricao: "Descreva o que você está praticando para evoluir aqui." },
];
