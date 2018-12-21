import api from 'api'

export default {
  namespaced: true,
  state: {
    address: [],
    addressChoose: {},
    addressEdi: {},
    defaultAddressId: 1
  },
  getters: {
    getAddressChoose: state => state.addressChoose,
    getAddressEdi: state => state.addressEdi,
    getAddress: state => state.address,
    getChosenAddressId: state => state.addressChoose.id,
    getDefaultAddress: state => {
      for (const item of state.address) {
        if (Number(item.id) === state.defaultAddressId) {
          return item
        }
      }
    }
  },
  mutations: {
    setAddress(state, val) {
      state.address = val
    },
    setAddressChoose(state, val) {
      state.addressChoose = val
    },
    setAddressEdi(state, val) {
      state.addressEdi = val
    }
  },
  actions: {
    saveAddress(ctx) {
      api.foods.address().then(res => {
        ctx.commit('setAddress', res.data.data)
      })
    }
  }
}
