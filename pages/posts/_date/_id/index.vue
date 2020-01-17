<template>
  <article-items v-bind:contents="Array(content)"></article-items>
</template>

<script>
import articleItems from "~/components/article-items";
import client from "~/apis/contentful.js";

export default {
  async asyncData({ params, query }) {
    const entry = await client.getEntry(query.id);
    return {
      content: entry
    };
  },
  head() {
    const title = `${this.content.fields.title} - r-yanyoのブログ`;
    const url = `https://r-yanyo.com/posts/${
      this.content.fields.date
    }/${this.content.sys.id.toLowerCase()}?id=${this.content.sys.id}`;
    return {
      title: title,
      meta: [
        { hid: "og:url", property: "og:url", content: url },
        { hid: "og:title", property: "og:title", content: title },
        { hid: "og:type", property: "og:type", content: "article" },
        {
          hid: "og:description",
          property: "og:description"
        }
      ],
      link: [{ rel: "canonical", href: url }]
    };
  },
  components: {
    articleItems
  }
};
</script>

<style>
</style>


<style lang="scss" scoped>
</style>
