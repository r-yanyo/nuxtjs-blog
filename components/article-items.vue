<template>
  <div class="article">
    <div class="article-item" v-for="content in contents" v-bind:key="content.base">
      <div class="article-head">
        <h1>
          <nuxt-link v-bind:to="content.base | link" class="article-title">{{ content.title }}</nuxt-link>
        </h1>
        <div class="meta-info">
          <time class="date">{{content.date}}</time>
          <ul class="tags">
            <li class="tag" v-for="tag in content.tags" v-bind:key="tag">{{tag}}</li>
          </ul>
        </div>
      </div>
      <div class="content" v-html="content.bodyHtml"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['contents'],
  filters: {
  link(base) {
    if (!base) return ''
    base = base.replace(/\.json$/, '')
    const split = base.split('-')
    const date = split.slice(0,3).join('-')
    const slug = split.slice(3,).join('-')
    return `posts/${date}/${slug}`
  }
  },
}
</script>

<style lang="scss">
@import 'highlight.js/styles/github.css';

.article {
  p {
    margin: 1.2rem 0;
    line-height: 1.6;
  }
}
.content{
  line-height: 1.8;
  h1, h2{
    margin: 24px 0;
    border-bottom: 1px solid #ddd;
  }
  h1 {
    font-size: 1.8rem;
  }
  h2 {
    font-size: 1.6rem;
  }
  img{
    max-width: 100%;
  }
  iframe{
    max-width: 100%;
  }
}
.article-item{
  margin-bottom: 32px;
  background-color: white;
  padding: 30px;
}
.article-head{
  margin-bottom: 24px;
}
a.article-title{
  font-size: 2rem;
  display: block;
  margin-bottom: 8px;
  color: rgb(68, 62, 62);
  text-decoration: none;
}
.meta-info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.date {
  margin-right: 16px;
}
.tags {
  display: flex;
  .tag{
    list-style: none;
    &+.tag{
      margin-left: 16px;
    }
  }
}

@media (max-width: 480px) { 
  a.article-title{
    font-size: 1.6rem;
  }
  .article-item {
    padding: 15px;
  }
  .content{
    h1 {
      font-size: 1.4rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
  .meta-info {
    flex-wrap: wrap;
  }
  .tags{
    padding-left: 0;
  }
}

pre{
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow-x: auto;
}

blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #eee;
}

</style>

