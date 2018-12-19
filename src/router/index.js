import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index'
import Ccm from 'pages/ccm/ccm_index'
import Merch from 'pages/ccm/food/merchant'
import Payfood from 'pages/ccm/food/payFood'
import Address from 'pages/ccm/food/address'
import AddressEdi from 'pages/ccm/food/addressEdi'

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
    path: '/ccm/food/merchant',
    name: 'merchant',
    component: Merch
  }, {
    path: '/ccm/food/payfood',
    name: 'payfood',
    component: Payfood
  }, {
    path: '/ccm/food/address',
    name: 'address',
    component: Address
  }, {
    path: '/ccm/food/addressEdi',
    name: 'addressEdi',
    component: AddressEdi
  }]
})
