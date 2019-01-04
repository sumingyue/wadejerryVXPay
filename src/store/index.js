import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'common/js/axios'

import foods from 'store/modules/ccm/foods'
import address from 'store/modules/ccm/address'
import merchant from 'store/modules/ccm/merchant'
import card from 'store/modules/ccm/card'

// Vue.use(axios)
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    foods,
    address,
    merchant,
    card
  }
})

export default store
