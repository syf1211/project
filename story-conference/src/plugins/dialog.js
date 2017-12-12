// import dialog from '@/components/dialog'
import dialog from '@/components/Mlayer'
export default {
  install (Vue, options) {
    let DialogComponents = Vue.extend(dialog)
    let dialogInstance = new DialogComponents()
    Vue.prototype.$dialog = {
      // show () {
      //   document.body.appendChild(dialogInstance.$mount().$el)
      //   dialogInstance.show()
      // },
      // hide () {
      //   dialogInstance.hide()
      // },
      open (opt) {
        // console.log(dialogInstance)
        Object.assign(dialogInstance, opt)
        document.body.appendChild(dialogInstance.$mount().$el)
      },
      alert (content) {
        // console.log(dialogInstance)
        Object.assign(dialogInstance, {
          type: 1,
          title: '信息',
          content: content,
          btns: '确定',
          shadowClose: false
        })
        document.body.appendChild(dialogInstance.$mount().$el)
      },
      confirm (content, opts = {}) {
        // console.log(dialogInstance)
        Object.assign(dialogInstance, {
          type: 1,
          title: '信息',
          content: content,
          btns: ['确定', '取消'],
          shadowClose: false,
          ...opts
        })
        document.body.appendChild(dialogInstance.$mount().$el)
      },
      msg (content = '', time = 4000) {
        // console.log(dialogInstance)
        Object.assign(dialogInstance, {
          type: 2,
          shadowClose: false,
          content: content,
          time: time,
          shadow: false
        })
        document.body.appendChild(dialogInstance.$mount().$el)
      }
    }
  }
}
