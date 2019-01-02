import base from 'api/base'
import axios from 'common/js/axios'

export default {
  recharge(par) {
    return axios.post(`${base.recharge}`, par)
  }
}
