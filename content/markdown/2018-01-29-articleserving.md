---
title: 記事を目次ページに表示する方法
date: 2018年01月29日
tags:
- JavaScript
- blog
---

自分でも忘れかけているのでメモ。
フロントエンドからaxiosでリクエストが来た時に、サーバ側がどうやってmarkdownファイルの情報を送っているか見てみます。

以下に示すのは目次ページに必要な要素を供給する部分です。

``` js
  server.get('/api/articles', (req,res) => {
    fs.readdir(`./markdowns/articles`,'utf-8',(err,files) => {
      if(err){
        res.status(400)
        res.send()
      }
      let metas = []
      files.forEach((file)=>{
        if(file.match('.md')){
          const data = fs.readFileSync(`./markdowns/articles/${file}`,'utf-8')
          const meta = frontMatter(data)
          const tags = Array.isArray(meta.attributes.tags) ? meta.attributes.tags : new Array(meta.attributes.tags); //配列ではない要素の場合も配列化する
          metas.push({
            filename: file.replace('.md',''),
            title: meta.attributes.title,
            subtitle: meta.attributes.subtitle,
            date: meta.attributes.date,
            tags: tags
          })
        }
      })
      metas.sort((a,b)=>{
        const aDate = parseInt(a.date.replace(/[^0-9]/g,""),10);
        const bDate = parseInt(b.date.replace(/[^0-9]/g,""),10);
        return bDate - aDate
      })
      const metasJSON = JSON.stringify(metas)   
      res.status(200)
      res.json(metasJSON)
    }) 
  })
```

フロント側が/api/articlesにアクセスして来たら、Markdownディレクトリをロードします。
``` js
  server.get('/api/articles', (req,res) => {
    fs.readdir(`./markdowns/articles`,'utf-8',(err,files) => {
      if(err){
        res.status(400)
        res.send()
      }

    ・・・

  }
```

Markdonwディレクトリを読み込んだ後にMarkdownファイルを一つずつ処理します。ここで行うのは目次に表示するためのメタ情報「タイトル」「タグ」「日時」などを取り出す処理です。

``` js

  ・・・

  let metas = []
    files.forEach((file)=>{
      if(file.match('.md')){
        const data = fs.readFileSync(`./markdowns/articles/${file}`,'utf-8')
        const meta = frontMatter(data)
        const tags = Array.isArray(meta.attributes.tags) ? meta.attributes.tags : new Array(meta.attributes.tags); //配列ではない要素の場合も配列化する
        metas.push({
          filename: file.replace('.md',''),
          title: meta.attributes.title,
          subtitle: meta.attributes.subtitle,
          date: meta.attributes.date,
          tags: tags
        })
      }
    })

    ・・・

```

メタ情報の取得には「frontMatter」を使っています。
frontMatterはMarkdownファイルの先頭に以下のようにメタ情報を書くとそれを認識してくれます。
処理が終わったら変数metasにプッシュしていきます。
```
---
title: 記事を目次ページに表示する方法
date: 2018年01月29日
tags:
- JavaScript
- blog
---
```

このままだと記事が目次に表示される順番がバラバラなので書いた日時でMarkdownファイルをソートします。

``` js

・・・

metas.sort((a,b)=>{
      const aDate = parseInt(a.date.replace(/[^0-9]/g,""),10);
      const bDate = parseInt(b.date.replace(/[^0-9]/g,""),10);
      return bDate - aDate
    })
    const metasJSON = JSON.stringify(metas)   
    res.status(200)
    res.json(metasJSON)
  }) 
})
```

日時は「YYYY年MM月DD日」のようなフォーマットなので、単純に日時以外の要素を取り除き大きさを比較します。

```
例) 
2018年01月29日 -> 20180129
2017年12月30日 -> 20171230

20180129 > 20171230
```

最後にJSONにしてフロントに送って終了です。