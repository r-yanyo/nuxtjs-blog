<template>
  <div>
    <header>
      <h1 class="profile-title">r-yanyoのプロフィール</h1>
      <nuxt-link to="/">ホームに戻る</nuxt-link>
    </header>
    <div id="content">
      <div class="wrapper">
        <section class="content-profile" id="top-content">
          <a href="https://twitter.com/r_yanyo" target="_blank" rel="noopener" id="image-link">
            <img src="/images/ball.png" class="clickable" />
          </a>
          <div class="description">
            <div>
              <div class="clickable" id="twitter-link">
                <a href="https://twitter.com/r_yanyo" target="_blank" rel="noopener">@r_yanyo</a>
              </div>
            </div>
            <p>1996年生まれ</p>
            <p>頑張ってる途中</p>
          </div>
          <div class="center">
            <div class="arrow arrow-down" />
          </div>
        </section>
      </div>
      <div class="wrapper wrapper-blue">
        <section class="content-profile" id="skills-content">
          <div class="heading">
            <h2>SKILLS</h2>
          </div>
          <div class="description">
            <p>Webアプリを一人で作れるようになるために、フロントエンドもバックエンドも勉強中。どっちかというとフロント寄りに興味がある。</p>
          </div>
          <!-- <ScrollAnimation animateIn="fadeIn"> -->
          <div id="skills" data-aos="flip-left">
            <i class="devicon-html5-plain" />
            <i class="devicon-css3-plain" />
            <i class="devicon-javascript-plain" />
            <i class="devicon-nodejs-plain-wordmark" />
            <i class="devicon-vuejs-plain-wordmark" />
            <i class="devicon-angularjs-plain" />
            <i class="devicon-rails-plain-wordmark" />
            <i class="devicon-python-plain-wordmark" />
          </div>
          <!-- </ScrollAnimation> -->
        </section>
      </div>
      <div class="wrapper">
        <section class="content-profile" id="about-content">
          <div class="heading">
            <h2>About Me</h2>
          </div>
          <p>Webエンジニアとして修行中。アルバイトをしていたり、趣味でアプリを作ったり。JavaScriptが好きです。</p>
          <br />
          <div class="history">
            <p>2017/04 豊橋技術科学大学 入学 Webプログラミングを始める</p>
            <p>2017/09 コニカミノルタハッカソン 3位</p>
            <p>2018/02~07 株式会社ウェブインパクト アルバイト</p>
            <p>2018/08~ 株式会社TwoGate アルバイト</p>
            <p>2019/01~02 株式会社Faber Company 実務訓練（インターンシップ）</p>
            <p>2019/09 CA Tech Challenge AbemaTV Hack -クライアントサイド編- 優秀賞</p>
          </div>
        </section>
      </div>
      <div class="wrapper wrapper-blue">
        <section class="content-profile" id="work-content">
          <div class="heading">
            <h2>WORKS</h2>
          </div>
          <div class="description">
            <p>今まで作ったものです。</p>
          </div>
          <!-- <ScrollAnimation animateIn="slideInRight"> -->
          <div id="works">
            <div class="work">
              <div class="work-left">
                <img src="/images/michinori.png" />
                <a href="https://michinori.herokuapp.com/" target="_blank" rel="noopener">Michinori</a>
              </div>
              <div class="work-right">
                <p>
                  GitHub:
                  <a
                    href="https://github.com/r-yanyo/michinori"
                  >https://github.com/r-yanyo/michinori</a>
                </p>
                <p>頑張った経験をシェアするサービスです。Vue.jsとRuby on Railsで作成しました。</p>
              </div>
            </div>
            <div class="work">
              <div class="work-left">
                <img src="/images/instagramanai.png" />
                <a
                  href="https://onsen-ui.herokuapp.com/"
                  target="_blank"
                  rel="noopener"
                >Instagramanai</a>
              </div>
              <div class="work-right">
                <p>
                  GitHub
                  <a
                    href="https://github.com/r-yanyo/onsen-ui"
                  >https://github.com/r-yanyo/onsen-ui</a>
                </p>
                <p>Vue.jsのモバイル向けフレームワークであるOnsenUIで作りました。デザインの練習で作成しました。（Herokuに上げているので起動が遅いです。）</p>
              </div>
            </div>
            <div class="work">
              <div class="work-left">
                <img src="/images/tutAddCalendarFromGmail.png" width="190px" />
                <a
                  href="http://yanyo.html.xdomain.jp/"
                  target="_blank"
                  rel="noopener"
                >tutAddCalendarFromGmail</a>
              </div>
              <div class="work-right">
                <p>
                  Github:
                  <a
                    href="https://github.com/r-yanyo/tutAddCalendarFromGmail"
                  >https://github.com/r-yanyo/tutAddCalendarFromGmail</a>
                </p>
                <p>豊橋技科大の補講・休講・教室変更情報をGmailからGoogleCalendarに自動追加するGoogleAppsScriptです。</p>
              </div>
            </div>
            <div class="work">
              <div class="work-left">
                <img src="/images/kusogame.png" width="190px" />
                <a href="http://yanyo.html.xdomain.jp/" target="_blank" rel="noopener">くそゲー倉庫</a>
              </div>
              <div class="work-right">
                <p>Game a weekで作ったゲームです。開発にはGameMakerを使用しました。スマホだと動かないです。</p>
              </div>
            </div>
            <div class="work">
              <div class="work-left">
                <img src="/images/notes.png" width="190px" />
                <a href="https://notes-ba3c8.web.app/" target="_blank" rel="noopener">notes2</a>
              </div>
              <div class="work-right">
                <p>
                  Github:
                  <a href="https://github.com/r-yanyo/notes">https://github.com/r-yanyo/notes</a>
                </p>
                <p>標準のNotesをあらゆるデバイスで使いたい。PWAで作ることで実現。</p>
              </div>
            </div>
          </div>
          <!-- </ScrollAnimation> -->
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "none",
  head() {
    return {
      title: "profile - r-yanyoのブログ",
      link: [
        {
          rel: "stylesheet",
          href:
            "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "css/my-animation.scss";

a,
i {
  color: #7777ff;
}
.center {
  display: flex;
  justify-content: center;
}
.arrow {
  position: relative;
  width: 30px;
  height: 30px;
  border: 5px solid;
  border-color: #565656 #565656 transparent transparent;
}
header {
  width: 100%;
  margin: auto;
  text-align: center;
  padding: 24px 10px;
}
.wrapper {
  width: 100%;
  background-color: white;
}
.wrapper-blue {
  background-color: #4444ff;
  color: white;
}
.content-profile {
  max-width: 600px;
  min-height: 450px;
  margin: 0 auto;
  padding: 20px 20px 50px 20px;
}
.clickable {
  display: inline-block;
  transition: 0.2s linear;
  animation: zoomhop 3s infinite linear 1s both;
}
.clickable:hover {
  transform: scale(1.2, 1.2);
}
.arrow-down {
  animation: updown 2s infinite ease 1s both;
}
.description {
  margin: 30px 0 60px 0;
}
#top-content {
  padding: 50px 0 30px 0;
  text-align: center;
}
#top-content img {
  max-width: 150px;
}
#top-content i {
  font-size: 2rem;
}
#top-content .description i {
  font-size: 1rem;
}
#image-link {
  max-width: 150px;
  margin: auto;
}
#skills-content {
  background-color: #4444ff;
  justify-content: between;
}
#skills {
  display: flex;
  max-width: 500px;
  margin: 50px auto;
  flex-wrap: wrap;
  justify-content: space-between;
}
#skills-content p {
  color: white;
}
#skills i {
  color: white;
  font-size: 4rem;
  margin: 30px;
}
.work {
  display: flex;
  margin-top: 16px;
}
#work-content {
  p,
  a {
    color: white;
  }
}
.work-left {
  margin-right: 12px;
  text-align: center;
}
.work-right {
}
#works p,
a {
  display: block;
}
.history {
  text-align: left;
}

@media (max-width: 480px) {
  .work {
    flex-direction: column;
  }
}
</style>

