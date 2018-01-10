import Vue from 'vue'
import Vuex from 'vuex'
import productList from './module/product'
import routerLoading from './module/routerLoading'
import details from './module/details'
import user from './module/user'
import found from './module/found'
import clause from './module/clause'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    productList,
    routerLoading,
    details,
    user,
    found,
    clause
  }
})
store.registerModule('vux', routerLoading)
export default store
