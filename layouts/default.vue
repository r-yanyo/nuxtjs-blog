<template>
  <div>
    <header-item></header-item>
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import headerItem from "~/components/header-item"

export default {
  components: {
    headerItem
  },
  head() {
    const title = `r-yanyo.com`;
    return {
      title: title,
    }
  }
}
</script>

<style lang="scss">
html,body{
  margin: 0;
}
html {
  font-family: 'Arial','Roboto','YuGothic','Yu Gothic';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  background-color: #e8eaef;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

p{
  overflow-wrap: break-word;
}

a:link{
  color: #337ab7;
  text-decoration: underline;
}
a:hover{
  opacity: 0.5;
}
a:visited{
  color: #337ab7;
}

.container {
  width: 960px;
  margin: auto;
  padding: 32px 80px;
  min-height: 100vh;
}
@media (max-width: 960px) { 
  .container {
    width: 100%;
    padding: 32px 0;
  }
}

</style>
