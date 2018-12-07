import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index'
import Ccm from 'pages/ccm/ccm_index'
import Merch from 'pages/ccm/merchant'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    name: 'index',
    component: Index
  }, {
    path: '/ccm',
    name: 'ccm',
    component: Ccm
  }, {
    path: '/ccm/merchant',
    name: 'merchant',
    component: Merch
  }]
})
