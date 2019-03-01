import Ccb from 'pages/ccb/index'
import check from 'pages/ccb/check'
import success from 'pages/ccb/success'

export default [{
  path: '/pay_ccb',
  name: 'pay_ccb',
  component: Ccb
}, {
  path: '/pay_ccb/check',
  name: 'pay_ccb_check',
  component: check
}, {
  path: '/pay_ccb/success',
  component: success
}]
