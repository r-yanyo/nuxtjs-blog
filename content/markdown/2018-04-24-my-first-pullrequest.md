---
title: 初めてオープンソースにPull Request出してみた
date: 2018年04月24日
tags:
  - git
  - JavaScript
---

春休みから某地元企業でアルバイトをさせてもらっていて、その業務の中で[Leaflet](http://leafletjs.com/index.html)というマップを簡単に描ける JS のライブラリを使用しています。

さらにそのライブラリの拡張として[Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster)というライブラリがあります。これはズームアウトした時に地図上で重なってしまうオブジェクトを集約表示するためのライブラリです。

**スター数は 2018 年 4 月現在で 2,128**。ちなみに Leaflet 自体はスター数２万越えなので結構大きい。以下の図が Leaflet.markercluster の例です。

<img src="/images/markercluster.png">

このライブラリを使っている時にたまたま簡単なバグを見つけたので人生で初めて OSS に Pull Request を送ってみました。

どんなバグかというと以下のように、変数に数値が入っていたらその値を使い、null や undefined だった場合は 1 を代入するというコードがあります。

しかし、これには問題があって**変数の値が 0 だった場合は False と見なされて 0 ではなく 1 が代入されてしまいます**

```
this.options.opacityWhenUnclustered = this.options.opacity || 1;
```

ということで以下のように変更します。つまり変数の中身が数字だったらそれを使用し、そうでない場合は 1 を代入します。

```
this.options.opacityWhenUnclustered = Number.isFinite(this.options.opacity) ? this.options.opacity : 1;
```

あんまり大きいバグでは無いですが、むしろ小さいバグの方がプルリク出しやすいので、せっかくだから Pull Request 出してみよう！という気持ちになりました。

ちょうど e-navigator[（前の記事を参照）](/p/accomplish-e-navigator)を行った時に Pull Request の正しい出し方を教わっていたのですが、実際やるとなると正直メンドくさい。

なので、「適当に Pull Request 出して、何か言われたら書き直すか〜」ぐらいの気持ちで書きました。[実際の Pull Request](https://github.com/Leaflet/Leaflet.markercluster/pull/890#issuecomment-382884808)

**そしたらまさかのマージ**。Pull Request を送った次の日には反応がありました。

初めてだったので良い経験できたな〜という感じです。ただ、今回は良かったものの、次 Pull Request 出す時はしっかりテストしてから出さなアカンなと思いました。
