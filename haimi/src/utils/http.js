import Vue from 'vue'
import axios from 'axios'
import vm from '../main'

// 自定义axios实例添加拦截器
let instance = axios.create({
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

// axios拦截器（在请求或响应被then或catch处理前拦截）
// 添加请求拦截器

instance.interceptors.request.use(function (config) {
   // 对请求数据做点什么
  // console.log('请求前')
  vm.$loading.show()
  return config
}, function (error) {
  vm.$loading.hide()
  return Promise.reject(error)
})
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // console.log('请求后')
  vm.$loading.hide()
  return response
}, function (error) {
  // console.log('请求失败')
  vm.$loading.hide()
  return Promise.reject(error)
})

Vue.prototype.$http = instance
export default instance
