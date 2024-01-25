import { whatIs } from "../../../../../../data/links";

const URL = "https://www.findwords.co";

export default async function sitemap() {
  const pages = whatIs.map((link) => ({
    url: `${URL}${link}`,
    lastModified: new Date().toISOString(),
  }));

  return [...pages];
}