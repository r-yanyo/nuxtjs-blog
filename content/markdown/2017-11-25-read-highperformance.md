---
title: 「ハイパフォーマンスWebサイト」を読んだ
date: 2017年11月25日
tags: 
- JavaScript
- 読書
---

## タイトル
ハイパフォーマンスWebサイト 高速サイトを実現する14のルール

## 発行日
- 初版第1刷 2008年04月11日
- 初版第10刷 2016年07月21日

## ページ数と読んだ時間
150ページぐらいと5時間ぐらい

## 内容
yahooでサイトのパフォーマンスを改善するチームに所属し、実際にそのWebサイトのパフォーマンスを改善した著者が、Webサイトを高速化する14のルールを紹介する。
```
- ルール1:  HTTPリクエストを減らす
- ルール2:  CDN(Content Delivery Network)を使う
- ルール3:  Expiresヘッダを設定する
- ルール4:  コンポーネントをgzipする
- ルール5:  スタイルシートは先頭に置く
- ルール6:  スクリプトは最後に置く
- ルール7:  CSS expressionの使用を控える
- ルール8:  JavaScriptとCSSは外部ファイル化する
- ルール9:  DNSルックアップを減らす
- ルール10: JavaScriptを縮小化する
- ルール11: リダイレクトを避ける
- ルール12: スクリプトを重複させない
- ルール13: ETagの設定を変更する
- ルール14: Ajaxをキャッシュ可能にする
```
## 感想
この本は第1刷が2008年と結構古く、Web技術の進化は早いので古いものはあまり買わないようにしていたが、この本の内容は今でも役に立ちそうだったので読んでみた。HTMLを書くときに「JavaScriptファイルはBodyタグの最後に書くと良い」というのをネット上でよく見かけるのでなんとなくそれに従って書いていたが、この本を読むとそれがなぜ良いのかが分かる。

[ブログを最適化する(1)](https://www.r-yanyo.com/p/gzip-compression)　の記事では「ルール4: コンポーネントをgzipする」を実際にやってみて、[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=ja)(Webページの速度を評価するツール)の数値が劇的に変わったので、その効果を実感できた。

この本は150ページとページ数が少なく気軽に読めるのでオススメです。
