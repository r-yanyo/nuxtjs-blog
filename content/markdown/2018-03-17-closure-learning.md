---
title: JavaScriptのクロージャについて
date: 2018年03月17日
tags:
- JavaScript
---

## クロージャとは
> クロージャは、独立した (自由な) 変数を参照する関数です。言い換えるとクロージャ内で定義された関数は、自身が作成された環境を覚えています

[MDN web doc](https://developer.mozilla.org/ja/docs/Web/JavaScript/Closures)より

<br>
関数を実行するたびに変数をincrementする関数を作るとすると、一般的には以下のようにグローバル変数が必要になる。

### 実行するたびcntを１増やす
```js
let cnt = 0;

function g(){
  cnt ++;
}

console.log(cnt);
g();
console.log(cnt);
```

### 実行結果
```
0
1
```
<br>
グローバル変数を使わないで書こうとすると以下のように失敗する。

### 実行するたびcntを１増やしたい(失敗)
```js
function h(){
  var cnt = 0;
  console.log(cnt);
  cnt++;
}

h();
h();
```

### 実行結果
```
0
0
```

<br>
しかし、クロージャを利用することでグローバル変数を使わずに実現出来る。当然変数nは外から参照出来ない。

### クロージャを利用した例
```js
function f(){
  let n = 0;
  return {
    show : function(){
      console.log('n is ' + n);
    },
    inc : function(){
      n ++;
    }
  }
}

const count = f();

count.show();
count.inc();
count.show();
console.log(count.n);

```

### 実行結果

```
n is 0
n is 1
undefined
```

## クロージャを使う利点
オブジェクト指向で言う、外部から見えない**プライベートな変数**を作ることが出来る。これによりグローバル変数を使わなくては実現出来なかった処理を、グローバル変数無しで実現出来る。