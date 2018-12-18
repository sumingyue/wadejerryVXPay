export default {
  namespaced: true,
  state: {
    nowMenu: 0,
    goodsList: []
  },
  getters: {
    getGoodsList: state => state.goodsList,
    getAllPirce: state => {
      let price = 0
      state.goodsList.forEach(item => {
        price += (parseInt(item.num) * parseInt(item.price))
      })
      return price
    },
    getNum: state => {
      let num = 0
      for (const item of state.goodsList) {
        num += Number(item.num)
      }
      return num
    }
  },
  mutations: {
    setMenuList(state, val) {
      state.menuList = val
    },
    setGoodsList(state, val) {
      state.goodsList = val
    }
  },
  actions: {}
}
