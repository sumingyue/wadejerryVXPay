export default {
  namespaced: true,
  state: {
    nowMenu: 0,
    allPrice: 0,
    goodsList: [{
      goodsId: '',
      goodsNum: '',
      goodsName: '',
      goodsPrice: ''
    }]
  },
  getters: {
    getMenuList: state => state.menuList,
    getGoodsList: state => state.goodsList,
    getAllPirce: state => state.allPrice
  },
  mutations: {
    setAllPrice(state, val) {
      state.allPrice = val
    },
    setMenuList(state, val) {
      state.menuList = val
    },
    setGoodsList(state, val) {
      state.goodsList = val
    }
  },
  actions: {}
}
