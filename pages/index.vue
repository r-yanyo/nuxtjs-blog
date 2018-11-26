<template>
  <div>
    <section class="container">
      <div class="index">
        <div class="index-item" v-for="content in contents" v-bind:key="content.base">
          <nuxt-link v-bind:to="content.base | link">{{ content.title }}</nuxt-link>
          <div class="meta-info">
            <time>{{content.date}}</time>
            <ul class="tags">
              <li class="tag" v-for="tag in content.tags" v-bind:key="tag">{{tag}}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { fileMap } from '~/content/json/summary.json';

export default {
  data(){
    return{
      contents: fileMap
    }
  },
  filters: {
    link(base) {
      if (!base) return ''
      base = base.replace(/\.json$/, '')
      const split = base.split('-')
      const date = base.split('-').slice(0,3).join('-')
      const slug = base.split('-').slice(3,).join('-')
      return `posts/${date}/${slug}`
    }
  },

}
</script>

<style lang="scss">

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.index {
  // display: flex;
  .index-item{
    .meta-info {
      display: flex;
    }
    .tags{
      display: flex;
    }
    .tag{
      list-style: none;
      margin-right: 8px;
    }
  }
}

</style>
