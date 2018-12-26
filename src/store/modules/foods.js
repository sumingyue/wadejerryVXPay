import api from 'api'

export default {
  namespaced: true,
  state: {
    nowMenu: 0,
    goodsList: [],
    goodsData: [],
    menuList: []
  },
  getters: {
    getGoodsList: state => state.goodsList,
    getGoodsData: state => state.goodsData,
    getAllPrice: state => {
      let price = 0
      state.goodsList.forEach(item => {
        price += (parseInt(item.num) * parseInt(item.price))
      })
      return price
    },
    getMenuList: state => state.menuList,
    getNum: state => {
      let num = 0
      for (const item of state.goodsList) {
        num += Number(item.num)
      }
      return num
    },
    getParData: state => {
      let data = []
      for (const item of state.goodsList) {
        let par = {}
        par.wareCode = item.id
        par.total = item.num
        par.menuId = item.merchantId

        data.push(par)
      }
      console.log(data)
      return data
    }
  },
  mutations: {
    setMenuList(state, val) {
      state.menuList = val
    },
    setGoodsList(state, val) {
      state.goodsList = val
    },
    setGoodsData(state, val) {
      state.goodsData = val
    }
  },
  actions: {
    saveGoodsList(ctx, par) {
      api.foods.goodsList(par).then(res => {
        ctx.commit('setGoodsData', res.data.wareListDtoList)
        ctx.commit('setMenuList', res.data.ccmMenuDtoList)
      })
    }
  }
}
