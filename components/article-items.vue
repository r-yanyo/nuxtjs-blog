<template>
  <div class="article">
    <div class="article-item" v-for="content in contents" v-bind:key="content.sys.id">
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
      <div class="content" v-html="$options.filters.markdownIt(content.fields.content)"></div>
      <a
        href="https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw"
        class="twitter-hashtag-button"
        data-size="default"
        v-bind:data-url="content | url"
        v-bind:data-text="content.fields.title"
        data-show-count="false"
      >Tweet</a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  </div>
</template>

<script>
const md = require("markdown-it")({
  html: true
}).use(require("markdown-it-highlightjs"));

export default {
  props: ["contents"],
  filters: {
    link(content) {
      return `/posts/${content.fields.date}/${content.sys.id}`;
    },
    url(content) {
      return `https://r-yanyo.com/posts/${content.fields.date}/${content.sys.id}`;
    },
    markdownIt(content) {
      return md.render(content);
    }
  }
};
</script>

<style lang="scss">
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
.article-item {
  margin-bottom: 32px;
  background-color: white;
  padding: 30px 100px;
}
.article-head {
  margin-bottom: 24px;
}
a.article-title {
  font-size: 2rem;
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: rgb(68, 62, 62);
  text-decoration: none;
}
.article-subtitle {
  font-size: 1.3rem;
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
  padding: 0;
  .tag {
    list-style: none;
    & + .tag {
      margin-left: 16px;
    }
  }
}

@media (max-width: 480px) {
  a.article-title {
    font-size: 1.6rem;
  }
  .article-item {
    padding: 15px;
  }
  .content {
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
  .tags {
    padding-left: 0;
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

