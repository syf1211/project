export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    clause ({store}, {productId}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/product/clause-list', {
          params: {
            product_id: productId
          }
        }).then((res) => {
          resolve(res)
        })
      })
    }
  }
}
