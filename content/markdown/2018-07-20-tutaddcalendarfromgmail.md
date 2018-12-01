---
title: 技科大の休講情報を自動でカレンダーに登録する。
date: 2017年07月20日
tags:
  - GoogleAppsScript
---

[Github にソースがあります](https://github.com/r-yanyo/tutAddCalendarFromGmail)

TUT の補講・休講・教室変更情報を Gmail から GoogleCalendar に追加する GoogleAppsScript です。

教務から送られてくるメールはだいたい以下のフォーマットになっています。

> ■ 開講学部：工学部  
> ■ 時間割番号：B136**\***  
> ■ 時間割名：ほげほげ  
> ■ 教室変更日：2017/06/08 のみ  
> ■ 時限：2 限  
> ■ 時間：10:30 ～ 12:00  
> ■ 変更前教室：Ａ２棟講義室 A2-301  
> ■ 変更後教室：Ａ１棟講義室 A1-201  
> ■ 学生へのメッセージ

このメールをパースして、カレンダーのイベントに追加します。（カレンダーが無い場合は新しく作成します。）  
カレンダーに追加したイベントはメールで通知されます。

### 実行方法

- "tutAddCalendarFromGmail.gs"をダウンロードするかコピーして新しく GoogleAppsScript を作成して下さい。(自分の Google ドライブに保存して下さい。)
- 教務から来るメールのラベルを"豊橋技科大"として下さい。（ラベル名は"createEvent"関数の引数で変更出来ます。)
- スクリプトを実行すると Google アカウントの認証を求められるので、教務からメールを受け取っているアカウントで認証して下さい。
- 実行が終わると、Google カレンダーに新しく"TUT 授業"というカレンダーが作成され、そこに補講・休講・教室変更情報が追加されます。
- また、追加されたイベントは Gmail にも通知されます。

### 改善したい点

- 補講・休講・教室変更の取り消しメールに対応していない。

### カレンダーに休講情報を追加した様子

google カレンダーはあまり見やすくないので google カレンダーと同期できる[ジョルテ](http://www.jorte.com/jp/)というカレンダーアプリを使用しています。

<img src="/images/tutAddCalendarFromGmail.png" width="500px">
<img src="/images/tutAddCalendarFromGmailDetail.png" width="300px">
