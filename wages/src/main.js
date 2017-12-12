// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/mock'
import '@/utils/http'
import './static/css/index.css'
import VueECharts from 'vue-echarts'
let vm = ''
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.component('chart', VueECharts)
/* eslint-disable no-new */
vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
export default vm
