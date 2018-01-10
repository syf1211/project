export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    getDetailsData ({store}, {id}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/product/view', {
          params: {
            product_id: id
          }
        }).then((res) => {
          resolve(res)
        })
      })
    },
    getArticle ({store}, {id}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/article/info', {
          params: {
            id
          }
        }).then((res) => {
          resolve(res)
        })
      })
    }
  }
}
