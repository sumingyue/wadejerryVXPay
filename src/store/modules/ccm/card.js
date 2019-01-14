import api from 'api'

export default {
  namespaced: true,
  state: {
    cardArr: []
  },
  getters: {
    getCard: state => state.cardArr
  },
  mutations: {
    setCard(state, val) {
      state.cardArr = val
    }
  },
  actions: {
    saveCard(ctx) {
      api.ccm.cardLoss.cardLoss().then(res => {
        ctx.commit('setCard', res.data.systemAuthDtoResult)
      })
    }
  }
}
