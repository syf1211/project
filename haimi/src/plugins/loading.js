import loading from '@/components/Loading'
export default {
  install (Vue, options) {
    // 挂载dom
    let LoadingComponents = Vue.extend(loading)
    let loadInstance = ''
    Vue.prototype.$loading = {
      show () {
        if (!loadInstance) {
          loadInstance = new LoadingComponents()
          loadInstance.$mount('#loading-box')
        }
        // console.log('show')
        loadInstance.show()
        // console.log(loadInstance)
      },
      hide () {
        // console.log('hide')
        loadInstance.hide()
      }
    }
  }
}
