// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import directives from './directives'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './utils/http'
import './mock'
import loading from './plugins/loading'

Vue.config.productionTip = false

// 循环注册指令
for (let item in directives) {
  // console.log(directives, item)
  Vue.directive(item, directives[item])
}

Vue.use(VueAwesomeSwiper)
Vue.use(loading)
Vue.config.silent = true
Vue.config.devtools = false

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
export default vm
