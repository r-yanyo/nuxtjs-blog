const pkg = require("./package");

import { sourceFileArray } from "./content/json/summary.json";

const generateDynamicRoutes = callback => {
  const routes = sourceFileArray.map(sourceFileName => {
    return sourceFileNameToUrl(sourceFileName);
  });
  callback(null, routes);
};

module.exports = {
  mode: "spa",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", href: "/ball.png" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  generate: {
    routes: generateDynamicRoutes
  }
};

function sourceFileNametoUrl(soruceFileName) {
  if (!base) return "";
  base = base.replace(/\.json$/, "");
  const split = base.split("-");
  const date = split.slice(0, 3).join("-");
  const slug = split.slice(3).join("-");
  return `posts/${date}/${slug}`;
}
