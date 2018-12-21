import api from 'api'

export default {
  namespaced: true,
  state: {
    address: [],
    addressEdi: {},
    disabledList: [
      {
        id: '3',
        name: '王五',
        tel: '1320000000',
        address: '浙江省杭州市滨江区江南大道 15 号'
      }
    ],
    areaList: {
      province_list: {
        110000: '北京市',
        120000: '天津市'
      },
      city_list: {
        110100: '北京市',
        110200: '县',
        120100: '天津市',
        120200: '县'
      },
      county_list: {
        110101: '东城区',
        110102: '西城区',
        110105: '朝阳区',
        110106: '丰台区',
        120101: '和平区',
        120102: '河东区',
        120103: '河西区',
        120104: '南开区',
        120105: '河北区'
      }
    },
    defaultAddressId: 1
  },
  getters: {
    getAddressEdi: state => state.addressEdi,
    getAddress: state => state.address,
    getChosenAddressId: state => state.addressEdi.id,
    getDisabledList: state => state.disabledList,
    getAreaList: state => state.areaList,
    getDefaultAddress: state => {
      for (const item of state.address) {
        if (item.id === state.defaultAddressId) {
          return item
        }
      }
    }
  },
  mutations: {
    setAddress(state, val) {
      state.address = val
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
