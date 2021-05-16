import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/view/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    }
  ]
})
