import Vue from 'vue'
import Router from 'vue-router'
import HeaderFooter from '@/components/public/HeaderFooter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HeaderFooter',
      component: HeaderFooter
    }
  ]
})
