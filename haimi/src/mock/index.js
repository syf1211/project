import axios from '../utils/http'
import MockAdapter from 'axios-mock-adapter'
import navData from './apiData/nav'
import banner from './apiData/banner'
import products from './apiData/product'

// 模拟接口
let mock = new MockAdapter(axios, {delayResponse: 1000})
// 首页导航数据
mock.onGet('/api/navbar').reply(function (config) {
  return [200, navData]
})

// banner数据
mock.onGet('/api/banner').reply(function (config) {
  return [200, banner]
})

// 产品数据
mock.onGet('/api/product').reply(function (config) {
  // let i = 0
  // let product = products.filter((item, index) => {
  //   if (item.type === type) {
  //     item.index = i++
  //   }
  //   return item.type === type
  // })
  // return [200, product.splice(pageSize * page, pageSize)]
  return [200, products]
})

// 产品切换数据
mock.onGet('/api/navCon').reply(function (config) {
  console.log(config.params)
  let product = []
  for (let i = 0; i < products.length; i++) {
    if (config.params === products[i].type) {
      product.push(products[i])
    }
  }
  return [200, product]
})

// 全部数据
mock.onGet('/api/productAll').reply(function (config) {
  let {val} = config.params
  let filterData = []
  for (let i = 0; i < products.length; i++) {
    if (products[i].word1.indexOf(val) === -1) {
      console.log('没有')
      // filterData.push('暂无此商品')
    } else {
      // console.log('eeeee')
      filterData.push(products[i])
    }
  }
  return [200, filterData]
})
