<template>
  <div>
    <header-item></header-item>
    <div class="container">
      <nuxt/>
    </div>
    <footer-item></footer-item>
  </div>
</template>

<script>
import headerItem from "~/components/header-item";
import footerItem from "~/components/footer-item";

export default {
  components: {
    headerItem,
    footerItem
  },
  head() {
    const title = `r-yanyo.com`;
    return {
      title: title
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 1200px;
  margin: auto;
  padding: 0 80px;
  min-height: 100vh;
}
@media (max-width: 1200px) {
  .container {
    width: 100%;
    padding: 0 0;
  }
}
</style>
