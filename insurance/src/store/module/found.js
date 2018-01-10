export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    getDetailsData ({store}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/article/list').then((res) => {
          resolve(res)
        })
      })
    }
  }
}
