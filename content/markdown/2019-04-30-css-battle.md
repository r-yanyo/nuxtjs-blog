---
title: CSSの実装でポイントを競い合う「CSSBattle」をやってみた
date: 2019年4月30日
tags:
  - HTML
  - CSS
---

最近、Tech 系のニュースは、[はてなブログのテクノロジータグ](http://b.hatena.ne.jp/hotentry/it)とか[Techfeed](https://techfeed.io/)で見ているんだけれど、そこで[CSSBattle](<(https://cssbattle.dev/)>)なるものを見つけたのでやってみた。

CSSBattle は、その名の通り、画像で与えられた TARGET デザインを参考に、CSS でデザインを作成し、それを提出すると評価ポイントが与えられる。競技プログラミングの CSS バージョンみたいなものだ。画像右の TARGET を目標に、画像左のエディタで HTML と CSS を書いていき、OUTPUT で出力結果が見れる。

評価基準は OUTPUT と TARGET の類似度と、ファイル文字数の少なさが関係しているっぽい。まだ簡単な問題しかなく、類似度は大抵 100%を狙えるため、以下に記述量を少なく実装できるかでポイントに差が出る。記述量の少なさを目指すという意味では競プロというより code golf に近い感じになるんだろうか。

<img src="/images/cssBattle.png">

具体的にはこんな感じのデザインが TARGET になっている。現在はまだ 12 問しか無いが、普段作らないような形ばかりなので、やってみると意外にオモシロイ。6 問目は円を 90° ごとに異なる色を割り当てる問題。最初は div を 4 つ組み合わせて作ろうと思ったけど、[conic-gradient](https://developer.mozilla.org/ja/docs/Web/CSS/conic-gradient)というのを使うと、１つの div タグで作れると初めて知った。普段使わない CSS プロパティを知れるのは良い点。

<img src="/images/cssBattle2.png">

但し、HTML+CSS で実際に求められる能力って、レスポンシブで崩れないデザインであったり、変更がしやすいという意味での拡張性な訳で、CSSBattle ではその辺が評価に含まれていない。今の所はあくまで暇つぶしにやる程度なのかなと思います。問題数が増えてきて、評価方法が改良されればもう少し流行るかも。
