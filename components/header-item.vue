<template>
  <header>
    <h1 class="blog-title">r-yanyoのブログ</h1>
    <nuxt-link to="/profile">
      <img class="my-icon" src="images/ball.png" alt="アイコン画像">
    </nuxt-link>
    <!-- profile
    <nuxt-link to="/">aaa</nuxt-link>-->
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  margin: auto;
  // background-color: rgb(199, 192, 192);
  text-align: center;
  padding: 24px;
}
.blog-title {
}
.my-icon {
  width: 40%;
  max-width: 100px;
}
</style>
