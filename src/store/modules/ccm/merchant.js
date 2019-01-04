import api from 'api'

export default {
  namespaced: true,
  state: {
    merchantList: [],
    chooseMerch: {}
  },
  getters: {
    getMerchant: state => state.merchantList,
    getChooseMerch: state => state.chooseMerch
  },
  mutations: {
    setMerchant(state, val) {
      state.merchantList = val
    },
    setChooseMerch(state, val) {
      state.chooseMerch = val
    }
  },
  actions: {
    saveMerchantList(ctx) {
      api.ccm.foods.merchant().then(res => {
        ctx.commit('setMerchant', res.data)
      })
    }
  }
}
