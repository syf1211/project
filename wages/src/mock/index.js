import axios from '@/utils/http'
import MockAdapter from 'axios-mock-adapter'
import login from './data/Login'
import tableList from './data/tableList'
import rules from './data/rules'

let mock = new MockAdapter(axios)

mock.onGet('/api/tableList').reply(config => {
  return [200, tableList]
})
function isUserList (item = {}) {
  let flg = false
  // console.log(item)
  for (let listItem of login) {
    if (item.username === listItem.username && item.userpwd === listItem.userpwd) {
      flg = listItem
    }
  }
  return flg
}

mock.onPost('/api/login').reply((config) => {
  let {
    username,
    userpwd
  } = JSON.parse(config.data)
  let user = isUserList({username, userpwd: userpwd + ''})
  // console.log(user)
  if (user) {
    return [200, user]
  } else {
    return [403, {
      msg: '用户名密码错误'
    }]
  }
})

mock.onGet('/api/getRules').reply((config) => {
  // console.log(config)
  let {
    type
  } = config.params
  // console.log(type)
  if (type) {
    return [200, rules[type - 1]]
  } else {
    return [200, rules]
  }
})
