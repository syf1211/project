export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    getProductList ({store}, {page, pageSize, catId}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/product/list', {
          params: {
            page,
            page_size: pageSize,
            cat_id: catId
          }
        })
        .then((res) => {
          resolve(res.data)
        })
      })
    },
    getHomeIndex ({store}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/home/index')
        .then((res) => {
          resolve(res)
        })
      })
    },
    GetPrice ({store}, postData) {
      return new Promise((resolve, reject) => {
        this._vm.$http.post('/api/trial/submit', postData).then((res) => {
          resolve(res.data)
        })
      })
    },
    getJob ({store}, {product_id}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/insured/job', {
          params: {
            product_id
          }
        }).then((res) => {
          resolve(res.data)
        })
      })
    },
    getInfo ({store}, {product_id}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/insure/attr', {
          params: {
            product_id
          }
        }).then((res) => {
          resolve(res.data)
        })
      })
    },
    getHeathy ({store}, {product_id, genes}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.post('/api/health-state/view', {
          product_id,
          genes
        }).then((res) => {
          resolve(res.data)
        })
      })
    },
    submitHeadthy ({store}, postData) {
      return new Promise((resolve, reject) => {
        this._vm.$http.post('/api/health-state/submit', postData).then((res) => {
          resolve(res.data)
        })
      })
    }
  }
}
