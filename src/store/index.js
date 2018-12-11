import Vue from 'vue'
import Vuex from 'vuex'

import foods from 'store/modules/foods'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    foods
  }
})

export default store
