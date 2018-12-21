import base from 'api/base'
import axios from 'common/js/axios'

export default {
  goodsList() {
    return axios.post(`${base.food.foodsList}`)
  },
  address() {
    return axios.post(`${base.food.address}`)
  }
}
