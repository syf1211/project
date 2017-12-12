import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login'
import Home from '@/views/Home'

import SalaryBill from '@/views/SalaryBill'
import payOff from '@/views/SalaryBill/children/payOff'
import salaryAdmin from '@/views/SalaryBill/children/salaryAdmin'
import staff from '@/views/SalaryBill/children/staff'

import CompanyService from '@/views/companyService'
import form from '@/views/companyService/children/form'
import server from '@/views/companyService/children/server'

import CompanyAdmin from '@/views/companyAdmin'
import admin from '@/views/companyAdmin/children/admin'
import setFocus from '@/views/companyAdmin/children/setFocus'
import AuthorityDistribution from '@/views/AuthorityDistribution'
Vue.use(Router)

let routerArr = [
  {
    path: '/authorityDistribution',
    name: 'AuthorityDistribution',
    component: AuthorityDistribution,
    meta: {
      title: '权限分配'
    }
  },
  {
    path: '/salaryBill',
    name: 'SalaryBill',
    component: SalaryBill,
    meta: {
      title: '工资条'
    },
    children: [
      {
        path: 'salaryAdmin',
        name: 'salaryAdmin',
        component: salaryAdmin,
        meta: {
          title: '工资条管理'
        }
      },
      {
        path: 'staff',
        name: 'staff',
        component: staff,
        meta: {
          title: '员工反馈'
        }
      },
      {
        path: 'payoff',
        name: 'payOff',
        component: payOff,
        meta: {
          title: '发工资条'
        }
      }
    ]
  },
  {
    path: '/companyService',
    name: 'CompanyService',
    component: CompanyService,
    meta: {
      title: '企业服务'
    },
    children: [
      {
        path: 'server',
        name: 'server',
        component: server,
        meta: {
          title: '薪税服务'
        }
      },
      {
        path: 'form',
        name: 'form',
        component: form,
        meta: {
          title: '报表'
        }
      }
    ]
  },
  {
    path: '/companyAdmin',
    name: 'CompanyAdmin',
    component: CompanyAdmin,
    meta: {
      title: '企业管理'
    },
    children: [
      {
        path: 'setFocus',
        name: 'setFocus',
        component: setFocus,
        meta: {
          title: '员工管理'
        }
      },
      {
        path: 'admin',
        name: 'admin',
        component: admin,
        meta: {
          title: '企业账户'
        }
      }
    ]
  }
]
function isRouter (name, objArr) {
  let routerObj = false
  for (let item of objArr) {
    if (item.name === name) {
      routerObj = item
    }
  }
  return routerObj
}

function getRouters (rules, routerArr) {
  let routers = []
  for (let item of rules) {
    let router = isRouter(item.name, routerArr)
    if (router) {
      // console.log(router)
      if (item.children) {
        router.children = getRouters(item.children, router.children)
      }
      routers.push(router)
    }
  }
  return routers
}
let newRouter = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

let HomeComponents = {
  path: '/home',
  name: 'Home',
  component: Home,
  meta: {
    title: '首页'
  }
}

let flg = false
let addRouters = function (vm, user) {
  // console.log(user)
  vm.$http.get('/api/getRules', {
    params: {
      type: user.userType
    }
  }).then((rules) => {
    // console.log(rules)
    newRouter.options.routes.push(HomeComponents)
    newRouter.addRoutes([HomeComponents])
    // console.log(rules.data)
    let rulesRouters = getRouters(rules.data.data, routerArr)
    newRouter.options.routes = [...newRouter.options.routes, ...rulesRouters]
    newRouter.addRoutes(rulesRouters)
    // console.log(newRouter.options)
  })
}

newRouter.beforeEach((to, from, next) => {
  let user = JSON.parse(window.localStorage.getItem('user'))
  if (user) {
    newRouter.app.user = user
    if (!flg) {
      addRouters(newRouter.app, user.data)
      flg = true
    }
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
export default newRouter
