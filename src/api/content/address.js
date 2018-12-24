import base from 'api/base'
import axios from 'common/js/axios'

export default {
  address() {
    return axios.post(`${base.address.address}`)
  },
  saveAddress() {
    return axios.post(`${base.address.saveAddress}`)
  },
  delAddress() {
    return axios.post(`${base.address.delAddress}`)
  }
}
