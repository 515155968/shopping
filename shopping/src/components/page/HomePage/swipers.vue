<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../../img/page/banner/banner1.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../../img/page/banner/banner2.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src="../../img/page/banner/banner3.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "swiper",
        data(){
          return{
            list:[
              {IndexIcon: require('../../img/page/banner/banner1.png')},
              {IndexIcon: require('../../img/page/banner/banner2.png')},
              {IndexIcon: require('../../img/page/banner/banner3.png')}
            ],
          }
        },
      mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          autoplay:true,
          loop:true
        })
      },
    }
</script>

<style scoped>

</style>
