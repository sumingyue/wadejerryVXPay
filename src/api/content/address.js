import base from 'api/base'
import axios from 'common/js/axios'

export default {
  address() {
    return axios.post(`${base.address.address}`)
  },
  saveAddress(par) {
    return axios.post(`${base.address.saveAddress}`, par)
  },
  delAddress(par) {
    return axios.post(`${base.address.delAddress}`, par)
  }
}
