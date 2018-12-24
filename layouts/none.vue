<template>
  <div>
    <nuxt/>
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
