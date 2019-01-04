import base from 'api/base'
import axios from 'common/js/axios'

export default {
  recode(par) {
    return axios.post(`${base.ccm.recode}`, par)
  }
}
