<template>
  <div class="article-cards">
    <article-card
      v-for="content in contents"
      :key="content.sys.id.toLowerCase()"
      :content="content"
    ></article-card>
  </div>
</template>

<script>
import articleCard from "~/components/article-card";
import client from "~/apis/contentful.js";

export default {
  async asyncData() {
    const entries = await client.getEntries();
    return {
      contents: entries.items.sort((a, b) =>
        a.fields.date > b.fields.date ? -1 : 1
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
  filters: {
    sortByDate(contents) {
      return contents.slice().sort((a, b) => a.fields.date < b.fields.date);
    }
  },
  components: {
    articleCard
  }
};
</script>

<style lang="scss" scoped>
@import "css/my-animation.scss";

.article-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.clickable {
  display: inline-block;
  transition: 0.2s linear;
  animation: zoomhop 3s infinite linear 1s both;
}
</style>
