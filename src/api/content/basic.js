import base from 'api/base'
import axios from 'common/js/axios'

export default {
  getInfo() {
    return axios.post(`${base.basic.getInfo}`)
  }
}
