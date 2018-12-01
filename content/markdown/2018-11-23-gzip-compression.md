---
title: ブログを最適化する
subtitle: (1)gzipでコンテンツを圧縮する
date: 2017年11月23日
tags:
  - blog
---

[dev.to と阿部寛のホームページどっちが速いですか？](http://kuxumarin.hatenablog.com/entry/2017/11/15/dev.to%E3%81%A8%E9%98%BF%E9%83%A8%E5%AF%9B%E3%81%AE%E3%83%9B%E3%83%BC%E3%83%A0%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%A9%E3%81%A3%E3%81%A1%E3%81%8C%E9%80%9F%E3%81%84%E3%81%A7%E3%81%99%E3%81%8B%EF%BC%9F)というめっちゃ面白い記事を見ました。

その記事では Google の[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=ja)という Web ページを評価するためのツールを利用して、dev.to と阿部寛のホームページを比較しています。

ということでこのブログの評価を見てみます。

<img src="/images/pageinsight-bef.png">

スコアは**41**と結構酷くなってしまいました。この記事を書くちょっと前に計測したときは 90 超えていたのに、記事やコードを増やしたら一気に悪くなってしまいました。(ちなみに阿部寛のホームページのスコアは 92 らしい）

で、この[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=ja)は Web ページが遅い原因も教えてくれて、このブログでは**コンテンツを gzip 圧縮していないよ**とのことでした。コンテンツっていうのは HTML とか JavaScript とか CSS とか画像とか、とにかく全部です。

このブログのサーバサイドは[Express](http://expressjs.com/)で書かれていて、その[ドキュメント](http://expressjs.com/ja/advanced/best-practice-performance.html)を見ると、以下のようにして gzip 圧縮をしたコンテンツを送信してくれるそうです。

```js
var compression = require("compression");
var express = require("express");
var app = express();
app.use(compression());
```

で、実際にやってみると、

<img src="/images/pageinsight-aft.png">

となり、スコアは**92**まで上昇しました。他にも遅い原因として**キャッシュを利用していない**ことが分かったので、それは後で解決します。たぶん。
