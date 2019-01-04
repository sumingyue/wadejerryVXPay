import base from 'api/base'
import axios from 'common/js/axios'

export default {
  goodsList(par) {
    return axios.post(`${base.ccm.food.foodsList}`, par)
  },
  merchant() {
    return axios.post(`${base.ccm.food.merchant}`)
  },
  pay(par) {
    return axios.post(`${base.ccm.food.pay}`, par)
  }
}
