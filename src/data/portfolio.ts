export const profile = {
  name: "Gerardo Mauricio Luna Moctezuma",
  shortName: "Mauricio Moctezuma",
  email: "mauricio.luna.moctezuma@outlook.com",
  phone: "+52 56 3500 2234",
  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
} as const;

export const navLinks = [
  { href: "#inicio", key: "inicio" },
  { href: "#sobre-mi", key: "sobreMi" },
  { href: "#experiencia", key: "experiencia" },
  { href: "#servicios", key: "servicios" },
  { href: "#proyectos", key: "proyectos" },
  { href: "#habilidades", key: "habilidades" },
  { href: "#contacto", key: "contacto" },
] as const;

export const experienceMeta = {
  company: "MiConamat – KERYS",
  location: "Querétaro, Querétaro",
  current: true,
} as const;

export const skillGroups = [
  {
    key: "frontend",
    skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "TypeScript"],
  },
  {
    key: "backend",
    skills: ["Node.js", "Java", "Spring Boot", "Python", "SQL Server"],
  },
  {
    key: "mobile",
    skills: ["Flutter", "Kotlin", "Xcode", "Publicación iOS & Android"],
  },
] as const;

export const allSkills = Array.from(
  new Set(skillGroups.flatMap((group) => group.skills)),
);

export const skillLevels = [
  { name: "React", value: 60 },
  { name: "TypeScript", value: 60 },
  { name: "JavaScript", value: 60 },
  { name: "Tailwind CSS", value: 50 },
  { name: "Java", value: 50 },
  { name: "SQL Server", value: 50 },
  { name: "Flutter", value: 50 },
  { name: "Kotlin", value: 50 },
] as const;

export const stats = [
  { key: "years", value: 2, suffix: "+" },
  { key: "techs", value: 12, suffix: "+" },
  { key: "projects", value: 2, suffix: "" },
  { key: "apps", value: 1, suffix: "" },
] as const;
