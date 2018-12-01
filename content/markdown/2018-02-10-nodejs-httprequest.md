---
title: Node.jsの標準モジュール(https)でAPIを叩く(GETのみ)
date: 2018年02月10日
tags:
  - JavaScript
---

### (結構前に Qiita に上げた記事です。)

Node.js を始めたばかりで API の叩き方が分からなかったのでメモ。
一般的には request モジュールを使用するようですが、モジュール無しでサクッと書きたいことがあったので。

API を叩くテストとして「[RANDOM USER GENERATOR](https://randomuser.me)」を使用。
（このサービスはアプリケーションのテスト用に、適当なダミーユーザを作成するものらしいです。）

# 基本型

以下のように https.request の引数に直接 URI を渡すと、自動的に http メソッドは'GET'になる。response データは res.on イベントで受け取る。最後に req.end()を呼ばないと動かないので注意。

```js
const https = require('https');
const req = https.request('URI', (res) => {
　　　　　　　　res.on('data', (chunk) => {

    ...

    });

    ....

})
req.end();
```

## 実装例

URI: https://randomuser.me/api/?inc=gender,name,nat&format=PrettyJSON

http メソッド: 'GET'

query: inc=gender,name,nat&format=PrettyJSON

```js
const https = require("https");

const req = https.request(
  "https://randomuser.me/api/?inc=gender,name,nat&format=PrettyJSON",
  res => {
    res.on("data", chunk => {
      console.log(`BODY: ${chunk}`);
    });
    res.on("end", () => {
      console.log("No more data in response.");
    });
  }
);

req.on("error", e => {
  console.error(`problem with request: ${e.message}`);
});

req.end();
```

## 結果

query で指定した「gender」、「name」、「nat」プロパティだけを取得出来ている。

```js
BODY: {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "shivanie",
        "last": "van kekem"
      },
      "nat": "NL"
    }
  ],
  "info": {
    "seed": "cdac8f9044c4fe04",
    "results": 1,
    "page": 1,
    "version": "1.1"
  }
}
No more data in response.
```

# Options を使って書く

先程のように URI を直接指定するのではなく、options に各要素を書くことも出来る。query は path に書く。
options の書き方は公式リファレンスに書いてある。(http モジュールのリファレンスですが、多分 https でもだいたい同じだと思う。。。）

https://nodejs.org/api/http.html#http_http_request_options_callback

```js
const https = require('https');

const options = {
  protocol: 'PROTOCOL',
  host: 'HOST',
  path: 'PATH'+'QUERY',
  method: 'METHOD',
　　　　headers: {
    'Content-Type': 'CONTENT-TYPE'
  }
};

const req = https.request(options, (res) => {
　　　　　　　　res.on('data', (chunk) => {

    ...

    });

    ....

})
req.end();
```

## 実装例

URI: https://randomuser.me/api/?inc=gender,name,nat&format=PrettyJSON

http メソッド: 'GET'

query: inc=gender,name,nat&format=PrettyJSON

```js
const https = require("https");

const options = {
  protocol: "https:",
  host: "www.randomuser.me",
  path: "/api" + "?inc=gender,name,nat&format=PrettyJSON",
  method: "GET"
};

const req = https.request(options, res => {
  res.on("data", chunk => {
    console.log(`BODY: ${chunk}`);
  });
  res.on("end", () => {
    console.log("No more data in response.");
  });
});

req.on("error", e => {
  console.error(`problem with request: ${e.message}`);
});

req.end();
```

## 結果

```
BODY: {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "patricia",
        "last": "evans"
      },
      "nat": "GB"
    }
  ],
  "info": {
    "seed": "795d48206f63ba29",
    "results": 1,
    "page": 1,
    "version": "1.1"
  }
}
No more data in response.
```
