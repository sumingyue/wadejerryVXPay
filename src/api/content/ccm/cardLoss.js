import base from 'api/base'
import axios from 'common/js/axios'

export default {
  cardLoss(par) {
    return axios.post(`${base.ccm.cardLoss}`, par)
  }
}
