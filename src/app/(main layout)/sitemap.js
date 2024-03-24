// app/sitemap.js

import { mainPage } from "../../../data/links";

const URL = "https://wordfinder.in";

export default async function sitemap() {
  const pages = mainPage.map((link) => ({
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
