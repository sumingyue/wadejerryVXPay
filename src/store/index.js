import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'common/js/axios'

import foods from 'store/modules/foods'
import address from 'store/modules/address'
import merchant from 'store/modules/merchant'

// Vue.use(axios)
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    foods,
    address,
    merchant
  }
})

export default store
