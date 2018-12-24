<template>
  <header>
    <h1>
      <nuxt-link to="/" class="blog-title">r-yanyoのブログ</nuxt-link>
    </h1>
    <nuxt-link to="/profile">
      <img class="my-icon clickable" src="/images/ball.png" alt="アイコン画像">
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
.clickable {
  display: inline-block;
  transition: 0.2s linear;
  animation: zoomhop 3s infinite linear 1s both;
}
.my-icon {
  width: 40%;
  max-width: 100px;
}
.blog-title {
  color: #443e3e;
  text-decoration: none;
}
</style>
