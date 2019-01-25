export default {
  ccm: {
    // 订餐
    food: {
      foodsList: '/mobile/ccm/diancan/result',
      merchant: '/mobile/ccm/merchant',
      pay: '/mobile/ccm/settlement'
    },
    // 地址
    address: {
      address: '/mobile/ccm/order/details',
      saveAddress: '/mobile/ccm/order/update',
      delAddress: '/mobile/ccm/order/details/delete'
    },
    // 充值
    recharge: {
      recharge: '/getCcmWeixinOrder',
      rechargeCCB: 'http://www.ejf365.com/YDHLPAY/payment/pay',
      rechargeNotify: '/mobile/ccm/ccb',
      rechargeBack: '/ccm/recharge/paySuccess',
      rechargeBackCCB: '/mobile/ccm/ccbPaymen'
    },
    // 卡挂失
    cardLoss: '/mobile/ccm/guashi',
    guashiCardNumber: '/mobile/ccm/guashiCardNumber',
    // 查询消费记录
    recode: {
      recode: '/mobile/ccm/record',
      recodes: '/mobile/ccm/records',
      recode_detail: '/moblie/ccm/recode_detail'
    }
  }
}
