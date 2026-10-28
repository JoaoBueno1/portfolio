export const PROFILE = {
  name: "João Marcos",
  fullName: "João Marcos Bueno da Silva",
  headerName: "Joao Marcos Bueno da Silva",
  location: "Gold Coast, Queensland, Australia",
  email: "joao.buenopc@gmail.com",
  github: "https://github.com/JoaoBueno1",
  linkedin: "https://www.linkedin.com/in/joao-marcos-bueno-da-silva-979a4a25a/",
  repo: "https://github.com/JoaoBueno1/portfolio",
} as const;

export function mailtoHref(subject: string): string {
  return `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}`;
}
