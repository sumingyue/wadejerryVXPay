import api from 'api'

export default {
  namespaced: true,
  state: {
    cardObj: {}
  },
  getters: {
    getCard: state => state.cardObj
  },
  mutations: {
    setCard(state, val) {
      state.cardObj = val
    }
  },
  actions: {
    saveCard(ctx) {
      api.ccm.cardLoss.cardLoss().then(res => {
        ctx.commit('setCard', res.data)
      })
    }
  }
}
