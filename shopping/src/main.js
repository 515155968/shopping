// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
/*swiper*/
// import swiper from 'swiper';
// import '../node_modules/swiper/dist/css/swiper.min.css'
// Vue.use(swiper)
import $ from 'jquery'
Vue.config.productionTip = false
// Vue.use(swiper)
Vue.use(VueLazyLoad,{
  error:'./components/img/page/logo/Shoppinglogo.png',   //这是图片加载不了时候显示
  loading:'./components/img/page/logo/wait1.jpg'// 这是待加载时候显示
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
