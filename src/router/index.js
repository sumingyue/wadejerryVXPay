import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index'
import NotFound from 'pages/404'

import ccm from 'router/routers/ccm'
import ccb from 'router/routers/ccb'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    ...[{
      path: '/',
      redirect: '/index'
    }, {
      path: '/index',
      name: 'index',
      component: Index
    }, {
      path: '*',
      component: NotFound
    }],
    ...ccm,
    ...ccb
  ]
})
