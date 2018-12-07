// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//  自定义全局变量
import global from 'common/js/global'

import '@/common/styles/index.styl'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(axios)
axios.defaults.baseURL = global.baseUrl
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
