<template>
  <article-items v-bind:contents="Array(content)"></article-items>
</template>

<script>
import articleItems from "~/components/article-items";
import { sourceFileArray } from "~/content/json/summary.json";

export default {
  validate({ params }) {
    return sourceFileArray.includes(
      `content/markdown/${params.date}-${params.slug}.md`
    );
  },
  asyncData({ params }) {
    return Object.assign(
      { content: require(`~/content/json/${params.date}-${params.slug}.json`) },
      params
    );
  },
  head() {
    const title = `${this.content.title} - r-yanyoのブログ`;
    const url = `https://r-yanyo.com/posts/${this.date}/${this.slug}/`;
    return {
      title: title,
      meta: [
        { hid: "og:url", property: "og:url", content: url },
        { hid: "og:title", property: "og:title", content: title },
        { hid: "og:type", property: "og:type", content: "article" },
        {
          hid: "og:description",
          property: "og:description",
          content: this.content.preview
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
