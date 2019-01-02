import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index'

import ccm from 'router/routers/ccm'

Vue.use(Router)

export default new Router({
  routes: [
    ...[{
      path: '/',
      redirect: '/index'
    }, {
      path: '/index',
      name: 'index',
      component: Index
    }],
    ...ccm
  ]
})
