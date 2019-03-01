// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from './api'
import axios from 'common/js/axios'
import lodash from 'lodash'
import moment from 'moment'

import '@/common/styles/index.styl'

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.prototype.$api = api
Vue.prototype.$axios = axios
Vue.prototype.$_ = lodash
Vue.prototype.$moment = moment

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
