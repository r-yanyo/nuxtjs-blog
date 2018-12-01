---
title: Vue.js + Onsen UI でInstagramっぽいUIを作った。
date: 2018年05月13日
tags:
  - Vue.js
  - Onsen UI
  - JavaScript
---

Vue.js と Onsen UI の勉強のために、Instagram っぽい UI を目指して作ってみました。

[作ったやつ](https://onsen-ui.herokuapp.com/)

一番の強みは PC からでもスマホからでも綺麗なデザインのまま使用できるところ。（ちなみにこのブログはあんまりスマホ向けを意識していなかった。今後改善していきたい）

- スマホから見た Web アプリ

<img src="/images/onsenui-compress.gif">

決して本家の Instagram アプリでは無い（笑）

## **Onsen UI、楽しい！超便利だ！！**

Onsen UI とは**モバイルアプリ開発用 UI フレームワーク**で、PC、スマホ両方から使える**ハイブリッド**で**SPA**な Web アプリを作ることが出来ます。Onsen UI は Vue.js だけでなく、React、Angular、jQuery などからも使用できるとのこと。コンポーネントが色々用意されているので、それを利用するだけで今風のアプリの UI が作れてしまう。しかもすぐにハイレベルなアクションが作れてしまうので楽しい。

## まず、Vue.js の紹介

Vue.js は最近流行りの JavaScript の UI フレームワーク。他のフレームワークよりも簡単、軽量で使いやすい印象。このブログを React を使って書いた経験があったので、Vue を使い始めるのは React 程は苦労しなかったなという感想。Vue は React と違って CDN からも使えるので、初めは CDN で使って試してみるのがいいと思います。そうでないと Vue を使う前に**Webpack**の設定などの環境構築で断念してしまう可能性大です。

Vue.js はこんな風に.vue ファイルに html,js,css を全て書き込むことが出来て、コンポーネント（Web ページの部品）としてまとめて書けます。

```js

//HTML
<template>
  <ul id='favorite-post' class='posts'>
    <li v-for="i in 7">
      <a href='#' class='post'>
        <img v-bind:src='"/public/img/food"+i+".jpg"' class="post-image">
      </a>
    </li>
  </ul>

  ...

</template>

//JavaScript
<script>
  import myPosts from './myPosts'

  export default {
    data() {
      return {
        toggle: true,
        tabIndex: 0,
        tabs: [
        {
          label: '投稿',
          page: myPosts,
        },
  ...

</script>

//CSS
<style scoped>
  .posts{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: flex-start;
  }

  ...

</style>
```

## Onsen UI の紹介

Onsen UI は公式サイトにコンポーネントの一覧があり、サンプルコードと実際の動作がセットで置いてあるのでコピペするだけで自分のアプリのそのコンポーネントを取り入れられます。
上記の Instagram っぽいアプリでは Carousel(写真をスワイプして切り替えられる機能)なんかも Onsen UI のコンポーネントを使っただけで簡単に作れます。

[Onsen UI Vue.js の API](https://ja.onsen.io/v2/api/vue/)

また以下のサイトでは、Onsen UI のコンポーネントをまとめたデモが見れます。
[https://onsenui.github.io/vue-onsenui-kitchensink/main.html?platform=ios](https://onsenui.github.io/vue-onsenui-kitchensink/main.html?platform=ios)

一番大変だったのは最初にする Webpack の設定。それさえ乗り越えられればとても便利なのではないかと。

## まとめ

Vue.js + Onsen UI おすすめです!!
