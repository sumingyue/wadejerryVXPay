import base from 'api/base'
import axios from 'common/js/axios'

export default {
  recode(par) {
    return axios.post(`${base.ccm.recode.recode}`, par)
  },
  recodes(par) {
    return axios.post(`${base.ccm.recode.recodes}`, par)
  },
  recode_detail(par) {
    return axios.post(`${base.ccm.recode.recode_detail}`, par)
  }
}
