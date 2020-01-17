<template>
  <div class="article-card">
    <div class="article-head">
      <time class="date">{{content.fields.date}}</time>
      <h1>
        <nuxt-link v-bind:to="content | link" class="article-title">{{ content.fields.title }}</nuxt-link>
      </h1>
      <h2 v-if="content.fields.subtitle" class="article-subtitle">{{ content.fields.subtitle }}</h2>
      <div class="meta-info">
        <ul class="tags">
          <li class="tag" v-for="tag in content.fields.tags" v-bind:key="tag">{{tag}}</li>
        </ul>
      </div>
    </div>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </div>
</template>

<script>
const md = require("markdown-it")({
  html: true
}).use(require("markdown-it-highlightjs"));

export default {
  props: ["content"],
  filters: {
    link(content) {
      return `/posts/${
        content.fields.date
      }/${content.sys.id.toLowerCase()}?id=${content.sys.id}`;
    },
    markdownIt(content) {
      return md.render(content);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "highlight.js/styles/github.css";

.article {
  p {
    margin: 1.2rem 0;
    line-height: 1.6;
    overflow-wrap: break-word;
  }
}
.content {
  line-height: 1.8;
  h1,
  h2 {
    margin: 24px 0;
    border-bottom: 1px solid #ddd;
  }
  h1 {
    font-size: 1.8rem;
  }
  h2 {
    font-size: 1.6rem;
  }
  img {
    max-width: 100%;
  }
  iframe {
    max-width: 100%;
  }
}
.article-card {
  width: 30%;
  &:not(:nth-child(3n)) {
    margin-right: 10px;
  }
  margin-bottom: 32px;
  background-color: white;
  padding: 20px 20px;
}
.article-head {
  margin-bottom: 24px;
}
a.article-title {
  font-size: 1.2rem;
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: rgb(68, 62, 62);
  text-decoration: none;
}
.article-subtitle {
  font-size: 1rem;
  display: block;
  font-weight: bold;
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
  align-items: center;
  margin: 0;
  padding: 0;
  .tag {
    list-style: none;
    font-size: 0.8rem;
    & + .tag {
      margin-left: 16px;
    }
  }
}
@media (max-width: 480px) {
  a.article-title {
    font-size: 1.6rem;
  }
  .article-card {
    width: 100%;
    padding: 15px;
  }
  .meta-info {
    flex-wrap: wrap;
  }
  .tags {
    padding-left: 0;
  }
}

@media (min-width: 1000px) {
  .article-card {
    border: 1px inset #8e7c7c61;
    border-radius: 5%;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  }
}

pre {
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

