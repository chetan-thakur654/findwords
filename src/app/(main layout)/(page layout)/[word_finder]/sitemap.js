// app/sitemap.js
import { noOfLetters } from "../../../../../data/links";

const URL = "https://wordfinder.in";

export default async function sitemap() {
  const pages = noOfLetters.map((link) => ({
    url: `${URL}${link}`,
    lastModified: new Date().toISOString(),
  }));

  return [...pages];
}
