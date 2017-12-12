// import vm from '@/main'
import Vue from 'vue'
import axios from 'axios'

// axios.interceptors.request.use(function (config) {
//   // console.log('请求前')
//   return config
// }, function (error) {
//   console.log('请求前错误')
//   return Promise.reject(error)
// })
// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//   return response.data
// }, function ({response}) {
//   if (response.status === 403) {
//     vm.$router.replace('/login')
//   } else {
//     vm.$message.error(response.data.msg)
//   }
//   return Promise.reject(response)
// })

Vue.prototype.$http = axios
export default axios
