import Ccm from 'pages/ccm/ccm_index'
import Foods from 'pages/ccm/food/foodsList'
import Payfood from 'pages/ccm/food/payFood'
import Address from 'pages/ccm/food/address'
import AddressEdi from 'pages/ccm/food/addressEdi'
import Merch from 'pages/ccm/food/merchant'

import Rec from 'pages/ccm/recharge/recharge'
import PaySuccess from 'pages/ccm/recharge/paySuccess'

import Recode from 'pages/ccm/recode/recode'
import RecodeDetail from 'pages/ccm/recode/recode_detail'

import RepLoss from 'pages/ccm/reportLoss/reportLoss'

export default [{
  path: '/ccm',
  name: 'ccm',
  component: Ccm
}, {
  path: '/ccm/food/foodsList',
  name: 'foodsList',
  component: Foods
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
}, {
  path: '/ccm/food/merchant',
  name: 'merchant',
  component: Merch,
  beforeEnter: (to, from, next) => {
    from.path === '/ccm/food/foodsList' ? next('/ccm') : next()
  }
}, {
  path: '/ccm/recharge',
  name: 'rec',
  component: Rec
}, {
  path: '/ccm/recode',
  name: 'recode',
  component: Recode
}, {
  path: '/ccm/reportLoss',
  name: 'repLoss',
  component: RepLoss
}, {
  path: '/ccm/recharge/paySuccess',
  name: 'paySuccess',
  component: PaySuccess
}, {
  path: '/ccm/recode/recode_detail',
  name: 'recodeDetail',
  component: RecodeDetail
}]
