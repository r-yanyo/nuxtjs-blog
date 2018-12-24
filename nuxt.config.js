const pkg = require("./package");

import { sourceFileArray } from "./content/json/summary.json";

const generateDynamicRoutes = callback => {
  const routes = sourceFileArray.map(sourceFileName => {
    if (!sourceFileName) return "";
    sourceFileName = sourceFileName
      .split("/")
      .slice(2)
      .join("/");
    sourceFileName = sourceFileName.replace(/\.md$/, "");
    const split = sourceFileName.split("-");
    const date = split.slice(0, 3).join("-");
    const slug = split.slice(3).join("-");
    return `posts/${date}/${slug}`;
  });
  callback(null, routes);
};

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      { hid: "og:url", property: "og:url", content: "https://r-yanyo.com/" },
      { hid: "og:title", property: "og:title", content: "r-yanyoのブログ" },
      { hid: "og:image", property: "og:image", content: "https://r-yanyo.com/images/ball.png" },
      { hid: "og:site_name", property: "og:site_name", content: "r-yanyoのブログ" },
      { hid: "og:type", property: "og:type", content: "blog" },
      {
        hid: "og:description",
        property: "og:description",
        content: "r-yanyoのブログです。"
      },
      // Twitter
      { name: "twitter:card", content: "summary" }
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
  css: ["~/css/main.css"],

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
