<template>
    <div>
        <header>
            <div class="header-nav">
                <div class="header-left">
                    <a href="javascript:;">富和双盛</a>
                    <i>|</i>
                    <a href="javascript:;">下载app</a>
                </div>
              <div class="header-right">
                  <a href="javascript:;">登录</a>
                  <i>|</i>
                  <a href="javascript:;">注册</a>
                  <i>|</i>
                  <a href="javascript:;">消息通知</a>
              </div>
            </div>
        </header>
        <IndexContent></IndexContent>
        <footer>
            <div class="footer_top">
                <div class="footer_top_max">
                  <div>
                    <p>友情链接</p>
                    <a href="javascript:;">家庭影院</a>
                    <a href="javascript:;">家庭影院论坛</a>
                    <a href="javascript:;">影音新时代</a>
                    <a href="javascript:;">地暖</a>
                  </div>
                </div>
                <div class="footer_top_max">
                  <div>
                    <p>关于我们</p>
                    <a href="javascript:;">公司简介</a>
                    <a href="javascript:;">新闻中心</a>
                    <a href="javascript:;">联系我们</a>
                  </div>
                </div>
                <div class="footer_top_max">
                  <div>
                    <p>服务与支持</p>
                    <a href="javascript:;">免费方案</a>
                    <a href="javascript:;">免费设计</a>
                  </div>
                </div>
                <div class="footer_top_max">
                  <div>
                    <p>装修产品</p>
                    <a href="javascript:;">家庭影院</a>
                    <a href="javascript:;">影音室装修</a>
                    <a href="javascript:;">KTV装修</a>
                    <a href="javascript:;">背景音乐装修</a>
                  </div>
                </div>
            </div>
            <div class="footer_bottom">
                <div class="footer_bottom_left">
                    <p>公司地址：北京市顺义区天柱路28号空港科技大厦A座705</p>
                    <p>全国客服电话：400-6710-190</p>
                    <p>客服邮箱：fuhess88@163.com</p>
                    <p>网址：www.fuhess.com</p>
                </div>
                <div class="footer_bottom_right">
                    <img src="../img/trademark/trademark-1.png" alt="">
                    <img src="../img/trademark/trademark-6.png" alt="">
                    <img src="../img/trademark/trademark-7.png" alt="">
                    <img src="../img/trademark/trademark-8.png" alt="">
                    <img src="../img/trademark/trademark-9.png" alt="">
                    <img src="../img/trademark/trademark-2.png" alt="">
                    <img src="../img/trademark/trademark-3.png" alt="">
                    <img src="../img/trademark/trademark-4.png" alt="">
                    <img src="../img/trademark/trademark-5.png" alt="">
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
  import IndexContent from "../page/HomePage/HomePage.vue"
  // import swiper from "../page/HomePage/swipers.vue"
      export default {
          name: "HeaderFooter",
          components:{
            // swiper,
            IndexContent
          }
      }
</script>

<style scoped>

</style>
