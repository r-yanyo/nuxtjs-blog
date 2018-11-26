---
title: Next.jsでブログを作った。
date: 2017年11月17日
tags:
- JavaScript
- blog
---

Next.jsでブログを作りました。

Next.jsとは、Webページを高速に表示する為に、SPA(シングルページアプリケーション)とSSR(サーバサイドレンダリング)の両方を生かそうというコンセプトで作られたフレームワークらしいです。

詳しくは
- <https://zeit.co/blog/next> か
- [それの日本語訳](https://qiita.com/nkzawa/items/1e0e93efd13fb982c8c0)
を見ると良いと思います。

Next.jsはSPAなので、ページを移動してもサーバとの通信が発生しません。よって高速にページ間の移動が出来ます。
以下は「Home」ページから「about」ページへ移動する時の通信をchromeのdevtoolsで見た様子です。

<img src="/static/images/network-log.png">

１回だけ通信が発生していますが、これはブログ記事をサーバから取ってくる為に私が書いたものなので、それを無くせばNext.js自体のルーティングでは通信は発生しません。
実際このブログでは記事を持ってくるのに190msもかかってしまっているので、ページ遷移はあんまり速くないです。

ブログ記事はmarkdownで書いています。
markdownファイルをHTMLに変換する為に、[markdown-it](https://www.npmjs.com/package/markdown-it)を使用しています。markdown-itには拡張用のプラグインがあって、それによってコードハイライトをしています。例えば
```js
function f(arg){
    var n=123 * Number(arg);
    return function(){
		console.log('n is ' + n);
		console.log('g is called');
    }
}
const num = f(5);
num();
```
のような感じ。Texのプラグインもあるのそれを導入すれば数式も綺麗に表示できるはずです。

Next.jsを使ったブログ作成はこちら <https://github.com/ganow/nextjs-blog-sample> を参考にさせて頂きました。