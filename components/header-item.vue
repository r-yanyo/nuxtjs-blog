<template>
  <header>
    <h1 class="blog-title">r-yanyoのブログ</h1>
    <nuxt-link to="/profile">profile</nuxt-link>
  </header>
</template>

<style lang="scss" scoped>
  header {
    width: 100%;
    margin: auto;
    background-color: rgb(199, 192, 192);
    text-align: center;
    padding: 24px;
    background-image: url(/images/background2.jpg)
  }
  .blog-title{
    padding: 20px;
  }
</style>
