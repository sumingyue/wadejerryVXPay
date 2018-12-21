import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'common/js/axios'

import foods from 'store/modules/foods'
import address from 'store/modules/address'

// Vue.use(axios)
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    foods,
    address
  }
})

export default store
