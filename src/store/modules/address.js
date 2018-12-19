export default {
  namespaced: true,
  state: {
    address: [],
    addressEdi: {}
  },
  getters: {
    getAddressEdi: state => state.addressEdi,
    getAddress: state => state.address
  },
  mutations: {
    setAddress(state, val) {
      state.address = val
    },
    setAddressEdi(state, val) {
      state.addressEdi = val
    }
  },
  actions: {}
}
