// app/sitemap.js

import { startsAndEnds } from "../../../../../data/links";

const URL = "https://www.findwords.co";

export default async function sitemap() {
  const pages = startsAndEnds.map((link) => ({
    url: `${URL}${link}`,
    lastModified: new Date().toISOString(),
  }));

  //   const routes = ["", "/portfolio", "/blog"].map((route) => ({
  //     url: `${URL}${route}`,
  //     lastModified: new Date().toISOString(),
  //   }));

  // return [...routes, ...posts];
  return [...pages];
}
