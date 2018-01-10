// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import App from './App'
// import Home from './components/HelloFromVux'
import router from './router'
import { AjaxPlugin } from 'vux'
import store from './store'
Vue.use(AjaxPlugin)
// console.log(AjaxPlugin)
// `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
// `transformResponse` 在传递给 then/catch 前，允许修改响应数据
// transformResponse: [function (data) {
//   // 对 data 进行任意转换处理
//   return data;
// }],
let instance = AjaxPlugin.$http.create({
  transformRequest: [function (data) {
    let urlData = ''
    // console.log(data)
    for (let key in data) {
      urlData += key + '=' + JSON.stringify(data[key]) + '&'
    }
    urlData = urlData.slice(0, -1)
    // console.log(urlData)
    return urlData
  }]
})
Vue.prototype.$http = instance

FastClick.attach(document.body)

Vue.config.productionTip = false
let vm = ''
/* eslint-disable no-new */
vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
console.log()
// 添加一个响应拦截器
vm.$http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  vm.$store.commit('updateLoadingStatus', {isLoading: true})
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
vm.$http.interceptors.response.use(function (response) {
  console.log('请求后')
  vm.$store.commit('updateLoadingStatus', {isLoading: false})
  return Promise.resolve(response)
}, function ({response}) {
  console.log('请求后错误')
  if (response.status === 403) {
    vm.$router.replace('/login')
  } else {
    // vm.$router.replace('/user')
    vm.$message.error(response.setCookie)
  }
  // Do something with response error
  return Promise.reject(response)
})
