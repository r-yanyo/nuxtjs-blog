<template>
  <div id="content">
    <div class="wrapper">
      <section class="content" id="top-content">
        <a href="https://twitter.com/r_yanyo" target="_blank" id="image-link">
          <img src="/images/ball.png" class="clickable">
        </a>
        <div class="description">
          <div>
            <div class="clickable" id="twitter-link">
              <a href="https://twitter.com/r_yanyo" target="_blank">@r_yanyo</a>
            </div>
          </div>
          <p>頑張ってる途中</p>
        </div>
        <div class="center">
          <div class="arrow arrow-down"/>
        </div>
      </section>
    </div>
    <div class="wrapper wrapper-blue">
      <section class="content" id="skills-content">
        <div class="heading">
          <h2>SKILLS</h2>
        </div>
        <div class="description">
          <p>Webアプリを一人で作れるようになるために、フロントエンドもバックエンドも勉強中。どっちかというとフロント寄りに興味がある。</p>
        </div>
        <!-- <ScrollAnimation animateIn="fadeIn"> -->
        <div id="skills" data-aos="flip-left">
          <i class="devicon-html5-plain"/>
          <i class="devicon-javascript-plain"/>
          <i class="devicon-css3-plain"/>
          <i class="devicon-nodejs-plain-wordmark"/>
          <i class="devicon-express-original-wordmark"/>
          <i class="devicon-vuejs-plain-wordmark"/>
          <i class="devicon-react-original-wordmark"/>
          <i class="devicon-rails-plain-wordmark"/>
          <i class="devicon-python-plain-wordmark"/>
        </div>
        <!-- </ScrollAnimation> -->
      </section>
    </div>
    <div class="wrapper">
      <section class="content" id="about-content">
        <div class="heading">
          <h2>About Me</h2>
        </div>
        <p>秋田高専 → 豊橋技科大</p>
        <p>Webエンジニアとして修行中。アルバイトをしていたり、趣味でアプリを作ったり。JavaScriptが好きです。</p>
        <br>
        <p>あと英語を話せるようにもなりたい、30歳ぐらいまでには。</p>
      </section>
    </div>
    <div class="wrapper wrapper-blue">
      <section class="content" id="work-content">
        <div class="heading">
          <h2>WORKS</h2>
        </div>
        <div class="description">
          <p>Herokuの無料枠に上げているのでロードが長く、落ちている可能性大です。いつか改善したい（いつか）。</p>
        </div>
        <!-- <ScrollAnimation animateIn="slideInRight"> -->
        <div id="works">
          <div class="work">
            <img src="/images/instagramanai.png">
            <a href="https://onsen-ui.herokuapp.com/" target="_blank">Instagramanai</a>
          </div>
          <div class="work">
            <img src="/images/michinori.png">
            <a href="https://michinori.herokuapp.com/" target="_blank">Michinori</a>
          </div>
        </div>
        <!-- </ScrollAnimation> -->
      </section>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'none',
  head() {
    return {
      title: "profile - r-yanyoのブログ",
      link: [
        { rel: "stylesheet", href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
a, i{
  color: #7777ff;
}
.center{
  display: flex;
  justify-content: center;
}
.arrow{
  position: relative;
  width: 30px;
  height: 30px;
  border: 5px solid;
  border-color: #565656 #565656 transparent transparent;
}
.heading{
  width: 100%;
}
.wrapper{
  width: 100%;
  text-align: center;
  background-color: white;
}
.wrapper-blue{
  background-color: #4444ff;
  color: white;
}
.content{
  max-width: 600px;
  min-height: 450px;
  margin: 0 auto;
  padding: 20px 20px 50px 20px;
}
.clickable{
  display: inline-block;
  transition: 0.2s linear;
  animation: zoomhop 3s infinite linear 1s both;
}
.clickable:hover{
  transform: scale(1.2,1.2);
}
.arrow-down{
  animation: updown 2s infinite ease 1s both;
}
.description{
  margin: 30px 0 60px 0;
}
#top-content{
  padding: 50px 0 30px 0;
}
#top-content img{
  max-width: 150px;
}
#top-content i{
  font-size: 2rem;
}
#top-content .description i{
  font-size: 1rem;
}
#image-link{
  max-width: 150px;
  margin: auto;
}
#skills-content{
  background-color: #4444ff;
  justify-content: between;
}
.heading{
  border-bottom: 1px solid;
}
#skills{
  display: flex;
  max-width: 500px;
  margin: 50px auto;
  flex-wrap: wrap;
  justify-content: space-between;
}
#skills-content p{
  color: white;
}
#skills i{
  color: white;
  font-size: 4rem;
  margin: 30px;
}
.work{
  margin: 0 25px;
}
#work-content p{
  color: white;
}
#works{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
}
#works p,a{
  display: block;
  color: white;
}
@keyframes updown {
  from {
    transform: translateY(-10px) rotate(135deg);
  }
  to {
    transform: translateY(10px) rotate(135deg);
  }
}
@keyframes zoomhop {
  35% {
    transform: scale(1,1);
  }
  40% {
    transform: scale(1.1,1.1);
  }
  45% {
    transform: scale(1,1);
  }
  50% {
    transform: scale(1.1,1.1);
  }
  55% {
    transform: scale(1,1);
  }
}
</style>

