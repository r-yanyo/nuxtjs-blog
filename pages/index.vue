<template>
  <article-items v-bind:contents="contents"></article-items>
</template>

<script>
import articleItems from "~/components/article-items";
import { fileMap } from "~/content/json/summary.json";
import { sourceFileArray } from "~/content/json/summary.json";

export default {
  asyncData() {
    return {
      contents: sourceFileArray
        .slice()
        .reverse()
        .map((
          sourceFile // use slice() to copy the array immutably
        ) =>
          Object.assign(
            {},
            require(`~/content/json/${sourceFile
              .split("/")[2]
              .replace(/\.md$/, ".json")}`)
          )
        )
    };
  },
  head() {
    const title = `r-yanyoのブログ`;
    const url = `https://r-yanyo.com`;
    return {
      title: title,
      meta: [],
      link: [{ rel: "canonical", href: url }]
    };
  },
  components: {
    articleItems
  }
};
</script>

<style lang="scss">
@import "css/my-animation.scss";

.clickable {
  display: inline-block;
  transition: 0.2s linear;
  animation: zoomhop 3s infinite linear 1s both;
}
</style>
