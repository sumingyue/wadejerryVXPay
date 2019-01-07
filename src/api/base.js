export default {
  ccm: {
    // 订餐
    food: {
      foodsList: '/mobile/ccm/diancan/result',
      merchant: '/mobile/ccm/merchant',
      pay: '/mobile/ccm/diancan/result'
    },
    // 地址
    address: {
      address: '/mobile/ccm/order/details',
      saveAddress: '/mobile/ccm/order/update',
      delAddress: '/mobile/ccm/order/details/delete'
    },
    // 充值
    recharge: '/getCcmWeixinOrder',
    rechargeCCB: 'http://www.ejf365.com/YDHLPAY/payment/pay',
    // 卡挂失
    cardLoss: '/mobile/ccm/guashi',
    // 查询消费记录
    recode: '/mobile/ccm/record'
  }
}
