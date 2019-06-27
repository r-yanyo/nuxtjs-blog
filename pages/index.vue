<template>
  <article-items v-bind:contents="contents"></article-items>
</template>

<script>
import articleItems from "~/components/article-items";
import client from "~/apis/contentful.js";

export default {
  async asyncData() {
    const entries = await client.getEntries()
    return {
      contents: entries.items.sort( (a,b) => a.fields.date > b.fields.date ? -1 : 1)
    }
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
  filters: {
    sortByDate(contents){
      return contents.slice().sort( (a,b) => a.fields.date < b.fields.date)
    }
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
