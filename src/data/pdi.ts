export const perfil = {
  nomeCompleto: "Larissa Vitória",
  primeiroNome: "Larissa",
  sobrenome: "Vitória",
  cargo: "Desenvolvedora Back-end",
  stackResumo: "Java | Spring Boot | AWS | SQL",
  empresa: "Freelancer",
  area: "Desenvolvimento Backend / Cloud",
  periodoInicio: "jan. de 2025",
  periodoFim: "atualmente",
  
  dataInicioISO: "2025-01-01",
  dataFimISO: "0000-00-00", 
  
  ultimaAtualizacao: "02 de Setembro de 2026",
  bio: "Sou apaixonada por tecnologia e construção de sistemas backend robustos. Atualmente foco meus estudos em Java, Spring Boot e Cloud (AWS e Azure), buscando evoluir como pessoa desenvolvedora e contribuir com soluções de impacto real.",
  github: "https://github.com/withxlari",
  linkedin: "https://www.linkedin.com/in/larissavitoriax/",
  
  fotoUrl: "/lari.jpg", 
};

export type Evento = {
  titulo: string;
  tipo: string;
  descricao: string;
  data: string;
  local: string;
  tags: string[];
  link?: string;
  imagem?: string;
};

export const eventos: Evento[] = [
  {
    titulo: "Galaxy AI Summit",
    tipo: "Palestra",
    descricao: "Participação no evento promovido pela Samsung Electronics sobre o futuro da inteligência artificial aplicada aos smartphones.",
    data: "21 de Outubro de 2025",
    local: "Universidade Cruzeiro do Sul",
    tags: ["Samsung", "Galaxy AI", "Inovação"],
    link: "https://www.linkedin.com/posts/larissavitoriax_galaxyaisummit-samsung-cruzeirodosul-activity-7387291895997095936-V1qF",
    imagem: "/gemini.jpg",
  },
  {
    titulo: "Treinamento IA Generativa",
    tipo: "Palestra",
    descricao: "Evento com o time do Google Cloud focado em IA Generativa na prática e ação para o Guinness Book como maior treinamento híbrido de IA.",
    data: "Outubro de 2025",
    local: "Universidade Cruzeiro do Sul",
    tags: ["Google Cloud", "IA Generativa", "Capacita+"],
    link: "https://www.linkedin.com/posts/larissavitoriax_googlecloud-iagenerativa-tecnologia-activity-7404678002225311744-ymDi",
    imagem: "/capacita.jpg", 
  }
];

export type Etapa = { etapa: string; titulo: string; foco: string; atual?: boolean };

export const trajetoria: Etapa[] = [
  { etapa: "Etapa 1", titulo: "Desenvolvedora Júnior", foco: "Foco: Cloud, APIs REST, Java, testes e microsserviços", atual: true },
  { etapa: "Etapa 2", titulo: "Desenvolvedora Pleno", foco: "Foco: arquitetura, cloud e sistemas distribuídos" },
  { etapa: "Etapa 3", titulo: "Desenvolvedora Sênior", foco: "Foco: decisões técnicas, liderança e escalabilidade" },
  { etapa: "Etapa 4", titulo: "Tech Lead ou Especialista", foco: "Foco: arquitetura de soluções, mentoria e impacto estratégico" },
];

export const metasEmAndamento: string[] = [
  "Evoluir em Java e Spring Boot",
  "Projetos focado em Java",
  "Aprender AWS aplicada a projetos reais",
  "Estudar para certificações AWS e Azure",
];

export type StatusMeta = "planejado" | "progresso" | "concluido";

export type Meta = {
  titulo: string;
  categoria: string;
  descricao: string;
  progresso: number;
  prioridade: "Alta" | "Média" | "Baixa";
  status: StatusMeta;
  icone: string;
};

export const metas: Meta[] = [
  {
    titulo: "Estudo aprofundado em Java",
    categoria: "Back-end",
    descricao: "Aprofundar conhecimentos em Java e Spring Boot, focando em conceitos de orientação a objetos, design patterns e desenvolvimento de APIs robustas.",
    progresso: 40,
    prioridade: "Alta",
    status: "progresso",
    icone: "Code2",
  },
  {
    titulo: "Projetos reais em Back-end",
    categoria: "Projetos",
    descricao: "Desenvolver e fazer o deploy de aplicações back-end completas do zero, simulando problemas e requisitos de negócios do mundo real.",
    progresso: 25,
    prioridade: "Alta",
    status: "progresso",
    icone: "Server",
  },
  {
    titulo: "Estudo para AWS Developer",
    categoria: "Cloud",
    descricao: "Preparação focada para a certificação AWS Certified Developer Associate, dominando serviços fundamentais como EC2, S3, Lambda e DynamoDB.",
    progresso: 15,
    prioridade: "Alta",
    status: "progresso",
    icone: "Cloud",
  },
];

export type Contribuicao = {
  titulo: string;
  categoria: string;
  situacao: string;
  descricao: string;
  tags: string[];
  impactos: string[];
  link?: string;
  icone: string;
};

export const categoriasContribuicao = ["Projetos", "Backend", "Estudos"];

export const contribuicoes: Contribuicao[] = [
  {
    titulo: "Cheffy (Restaurant ERP)",
    categoria: "Backend",
    situacao: "Em andamento",
    descricao: "Plataforma SaaS Multi-Tenant para gestão centralizada de restaurantes. Foco no desenvolvimento de uma arquitetura escalável utilizando Java 21, Spring Boot 3, mensageria com RabbitMQ e cache com Redis. O sistema engloba módulos integrados de cardápio digital, Kitchen Display System (KDS), gestão de mesas, estoque inteligente e relatórios financeiros, além de prever automações e insights através de Inteligência Artificial.",
    tags: ["Java", "Spring Boot", "RabbitMQ", "Redis", "PostgreSQL"],
    impactos: [
      "Prática de arquitetura Multi-Tenant escalável.",
      "Implementação de mensageria e eventos em tempo real.",
      "Estudo aprofundado em integrações e automação com IA."
    ],
    link: "",
    icone: "Server",
  },
  {
    titulo: "Cultiva (Plataforma Web)",
    categoria: "Projetos",
    situacao: "Finalizado",
    descricao: "Plataforma voltada ao apoio de microempreendedores locais. Desenvolvi APIs RESTful para módulos de gestão financeira e precificação de serviços, otimizando o processamento de dados do usuário e auxiliando na organização de pequenos negócios.",
    tags: ["Node.js", "Express", "PostgreSQL", "React", "Geolocalização"],
    impactos: [
      "Modelagem eficiente de banco de dados relacional.",
      "Criação de rotas REST seguras e otimizadas.",
      "Impacto direto na organização financeira local."
    ],
    link: "",
    icone: "Sprout",
  },
  {
    titulo: "Gestor de Obras",
    categoria: "Projetos",
    situacao: "Finalizado",
    descricao: "Desenvolvimento de sistema web para organização e acompanhamento de obras, permitindo visualizar o progresso de tarefas. Foco na implementação de sistema de autenticação seguro e na integração fluida entre o front-end interativo e os dados armazenados.",
    tags: ["JavaScript", "Node.js", "React", "PostgreSQL", "Tailwind"],
    impactos: [
      "Implementação prática de fluxos de autenticação.",
      "Criação de interface orientada a dados.",
      "Integração eficiente entre front-end e back-end."
    ],
    link: "",
    icone: "HardHat",
  },
];

export type NivelSkill = "domino" | "estudando" | "estudar";

export type GrupoRoadmap = {
  grupo: string;
  icone: string;
  itens: { nome: string; nivel: NivelSkill }[];
};

export const roadmap: GrupoRoadmap[] = [
  {
    grupo: "Backend",
    icone: "Server",
    itens: [
      { nome: "Node.js", nivel: "domino" },
      { nome: "Python", nivel: "domino" },
      { nome: "FastAPI", nivel: "domino" },
      { nome: "Java", nivel: "estudando" },
      { nome: "Spring Boot", nivel: "estudando" },
      { nome: "Spring Security", nivel: "estudando" },
      { nome: "Microsserviços", nivel: "estudando" },
      { nome: "Testes Integrados/Automatizados", nivel: "estudar" },
      { nome: "Mensageria", nivel: "estudar" },
    ],
  },
  {
    grupo: "Banco de Dados",
    icone: "Database",
    itens: [
      { nome: "PostgreSQL", nivel: "domino" },
      { nome: "MySQL", nivel: "domino" },
      { nome: "SQL", nivel: "domino" },
    ],
  },
  {
    grupo: "Cloud & DevOps",
    icone: "Cloud",
    itens: [
      { nome: "Git/GitHub", nivel: "domino" },
      { nome: "Docker", nivel: "estudando" },
      { nome: "Kubernetes", nivel: "estudando" },
      { nome: "AWS", nivel: "estudando" },
      { nome: "Microsoft Azure", nivel: "estudando" },
      { nome: "DataDog", nivel: "estudar" },
      { nome: "Terraform", nivel: "estudar" },
      { nome: "CI/CD", nivel: "estudar" },
    ],
  },
  {
    grupo: "Frontend",
    icone: "Layout",
    itens: [
      { nome: "JavaScript", nivel: "domino" },
      { nome: "React", nivel: "domino" },
      { nome: "Tailwind CSS", nivel: "domino" },
    ],
  },
  {
    grupo: "Certificações & Idiomas",
    icone: "Award",
    itens: [
      { nome: "English EF SET C2 Proficient", nivel: "domino" },
    ],
  },
];

export type SoftSkill = { 
  titulo: string; 
  descricao: string;
  icone: string;
};

export const softSkillsPratico: SoftSkill[] = [
  { 
    titulo: "Organização", 
    descricao: "Mantenho rotina e tarefas sob controle com método.",
    icone: "ListChecks"
  },
  { 
    titulo: "Aprendizado contínuo", 
    descricao: "Estudo todos os dias e busco evoluir tecnicamente.",
    icone: "BookOpen"
  },
  { 
    titulo: "Trabalho em equipe", 
    descricao: "Colaboro ativamente e ajudo o time a entregar valor.",
    icone: "Users"
  },
  { 
    titulo: "Proatividade", 
    descricao: "Antecipo necessidades e busco oportunidades de contribuir.",
    icone: "Zap"
  },
  { 
    titulo: "Documentação", 
    descricao: "Documento processos e decisões para o time.",
    icone: "FileText"
  },
];

export const softSkillsEvolucao: SoftSkill[] = [
  { 
    titulo: "Comunicação", 
    descricao: "Expresso ideias com clareza em times e reuniões.",
    icone: "MessageSquare"
  },
  { 
    titulo: "Segurança para apresentar ideias", 
    descricao: "Trabalhando para falar com mais confiança em público.",
    icone: "Sparkles"
  },
  { 
    titulo: "Pensamento sistêmico", 
    descricao: "Aprendendo a enxergar o todo antes da parte.",
    icone: "Workflow"
  },
  { 
    titulo: "Visão de arquitetura", 
    descricao: "Estudando padrões e decisões arquiteturais.",
    icone: "Layers"
  },
  { 
    titulo: "Autonomia técnica", 
    descricao: "Evoluindo na resolução independente de problemas.",
    icone: "Rocket"
  },
  { 
    titulo: "Priorização", 
    descricao: "Aprimorando a escolha do que entregar primeiro.",
    icone: "Target"
  },
  { 
    titulo: "Clareza em rituais ágeis", 
    descricao: "Praticando objetividade em dailys e plannings.",
    icone: "Activity"
  },
];