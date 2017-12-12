import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/views/shouye'
import fenlei from '@/views/fenlei'
import my from '@/views/my'
import login from '@/views/login'
import car from '@/views/car'
import search from '@/views/Search'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/shouye'
    },
    {
      path: '/shouye',
      name: 'shouye',
      component: shouye
    },
    {
      path: '/search/:con',
      name: 'search',
      component: search
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei
    },
    {
      path: '/my',
      name: 'my',
      component: my,
      meta: {
        isAuth: true
      }
    },
    {
      path: '/car',
      name: 'car',
      component: car
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      query: {
        loginDoCallback: ''
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    if (localStorage.getItem('user')) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          loginDoCallback: to.path
        }
      })
    }
  } else {
    next()
  }
})
export default router
