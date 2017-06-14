<template>
    <div>
    	<div>
            <img src="./../images/view.jpg" alt="" width="100%">   
        </div>
        <article>
          <div class="l_box fl">
            <div class="topnews mt20">
              <h2><b>文章</b>推荐</h2>
              <div class="blogs">
                <figure><img src="./../images/cat.jpg"></figure>
                <ul>
                  <h3><a href="/">vue的某个坑</a></h3>
                  <p>通信时代，无论是初次相见还是老友重逢，交换联系方式，常常是彼此交换名片，然后郑重或是出于礼貌用手机记下对方的电话号码。在快节奏的生活里，我们不知不觉中就成为住在别人手机里的朋友。又因某些意外，变成了别人手机里匆忙的过客，这种快餐式的友谊 ...</p>
                  <p class="autor">
                    <span class="lm fl"><a href="/">个人博客</a></span>
                    <span class="dtime fl">2014-02-19</span>
                    <span class="viewnum fr">浏览（<a href="/">459</a>）</span>
                    <span class="pingl fr">评论（<a href="/">30</a>）</span>
                </p>
                </ul>
              </div>
            </div>
          </div>
          <div class="r_box fr">
            <div class="tit01 mt20">
              <h3>关注我</h3>
              <div class="gzwm">
                <ul>
                  <li><a class="xlwb" href="#" target="_blank">个人介绍</a></li>
                  <li><a class="rss" href="#" target="_blank">GitHub</a></li>
                  <li><a class="wx" href="#">邮箱</a></li>
                </ul>
              </div>
            </div>
            <!--tit01 end-->
            <div class="cloud">
              <h3>标签云</h3>
              <ul>
                <li><a href="/">个人博客</a></li>
                <li><a href="/">web开发</a></li>
                <li><a href="/">前端设计</a></li>
                <li><a href="/">Html</a></li>
                <li><a href="/">CSS3</a></li>
                <li><a href="/">Html5+css3</a></li>
                <li><a href="/">百度</a></li>
              </ul>
            </div>
            <div class="ad"> <img src="./../images/eight.png" width="100%"> </div>
            <div class="links">
              <h3>友情链接</h3>
              <ul>
                <li><a href="/">杨青个人博客</a></li>
                <li><a href="/">web开发</a></li>
                <li><a href="/">前端设计</a></li>
                <li><a href="/">Html</a></li>
                <li><a href="/">CSS3</a></li>
                <li><a href="/">Html5+css3</a></li>
                <li><a href="/">百度</a></li>
              </ul>
            </div>
          </div>
          <!--r_box end --> 
        </article>
    <router-link :to="'/pages/index/1'">首页</router-link> 
    </div>
</template>
<script>
    // import Demo from './demo.vue';
    export default {
        data () {
            return {
                
            }
        }
    }
</script> 
<style type="text/css">
    body{

    }
    article{
        display: block;
        width: 1000px;
        margin: 0 auto;
        overflow: hidden;
    }
    .l_box {
        width: 670px;
    }
    .r_box {
        width: 300px;
    }
    .topnews h2 {
        font-size: 16px;
        font-weight: bold;
        line-height: 36px;
        border-bottom: #3eb76b 4px solid;
    }
    .blogs {
        padding: 30px 0;
        position: relative;
        border-bottom: #ccc 1px solid;
        overflow: hidden;
    }
    .blogs figure {
        float: left;
        width: 25%;
        overflow: hidden;
    }
    .blogs figure img {
        width: 100%;
        margin: auto;
        -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }
    .blogs figure:hover img { 
        -moz-transform: scale(1.1); 
        -webkit-transform: scale(1.1); 
        -o-transform: scale(1.1); 
        -ms-transform: scale(1.1); 
    }
    .blogs ul {
        float: right;
        line-height: 22px;
        width: 72%;
        color: #556677;
    }
    .blogs h3 {
        font-size: 16px;
        font-weight: bold;
        transition: all .5s;
        margin-bottom: 10px;
    }
    .autor {
        margin: 10px 0;
        display: inline-block;
        color: #a0abbb;
        width: 100%;
        overflow: hidden;
        clear: both;
    }
    .ad{
        margin: 30px 0;
    }
    .autor span {
        margin: 0 10px 0 0;
        padding-left: 20px;
    }
    .tit01 h3 {
        line-height: 40px;
        color: #333943;
        font-size: 18px;
        border-bottom: 1px solid #E6E6E6;
        height: 40px;
    }
    .gzwm ul {
        width: 100%;
        margin: 20px 0;
        overflow: hidden;
    }
    .gzwm li {
        width: 78px;
        margin: 0 11px;
        float: left;
    }
    .gzwm li a {
        color: #556677;
        width: 78px;
        text-align: center;
        padding-top: 60px;
        float: left;
    }
    .cloud {
        width: 100%;
        clear: both;
        overflow: hidden;
    }
    .cloud h3 {
        line-height: 40px;
        color: #333943;
        font-size: 18px;
        border-bottom: 1px solid #E6E6E6;
        height: 40px;
        margin-bottom: 10px;
    }
    .cloud ul li {
        line-height: 24px;
        height: 24px;
        display: block;
        background: #999;
        float: left;
        padding: 3px 11px;
        margin: 10px 10px 0 0;
        border-radius: 8px;
        -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }
    .cloud ul li:nth-child(8n-7) { 
        background: #8A9B0F 
    }
    .cloud ul li:nth-child(8n-6) {
        background: #EB6841 
    }
    .cloud ul li:nth-child(8n-5) {
        background: #3FB8AF 
    }
    .cloud ul li:nth-child(8n-4) { 
        background: #FE4365 
    }
    .cloud ul li:nth-child(8n-3) { 
        background: #FC9D9A 
    }
    .cloud ul li:nth-child(8n-2) { 
        background: #EDC951 
    }
    .cloud ul li:nth-child(8n-1) { 
        background: #C8C8A9 
    }
    .cloud ul li:nth-child(8n) { 
        background: #83AF9B 
    }
    .cloud ul li:first-child { 
        background: #036564 
    }
    .cloud ul li:last-child { 
        background: #3299BB 
    }
    .cloud ul li:hover { 
        border-radius: 0; 
        text-shadow: #000 1px 1px 1px; 
    }
    .cloud ul li a{
        color: #fff;
    }
    .links {
        width: 100%;
        overflow: hidden;
        clear: both;
    }
    .links h3 {
        line-height: 40px;
        color: #333943;
        font-size: 18px;
        border-bottom: 1px solid #E6E6E6;
        height: 40px;
        margin-bottom: 20px;
    }
    .links ul {
        background: #f9f9f9;
        padding: 10px;
        overflow: hidden;
        border: #e9e9e9 1px solid;
    }
    .links ul li {
        float: left;
        padding: 5px 8px;
    }
</style>