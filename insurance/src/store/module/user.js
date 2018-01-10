export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    loginFn ({store}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/test-login').then((res) => {
          resolve(res)
        })
      })
    },
    getUserInfo ({store}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/user/info').then((res) => {
          resolve(res)
        })
      })
    },
    updateUserInfo ({store}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.post('/api/user/update').then((res) => {
          resolve(res)
        })
      })
    }
  }
}
