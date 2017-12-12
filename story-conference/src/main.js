// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/static/css/reset.css'
import dialog from './plugins/dialog.js'
import axios from 'axios'
Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.use(dialog)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
