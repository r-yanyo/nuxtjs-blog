<template>
  <div>
    <header-item></header-item>
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import headerItem from "~/components/header-item";

export default {
  components: {
    headerItem
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
  width: 960px;
  margin: auto;
  padding: 0 80px;
  min-height: 100vh;
}
@media (max-width: 960px) {
  .container {
    width: 100%;
    padding: 0 0;
  }
}
</style>
