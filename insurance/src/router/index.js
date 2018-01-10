import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Found from '@/views/Found'
import Mine from '@/views/Mine'
import Login from '@/views/Login'
import ListDetails from '@/views/Found/components/ListDetails'
import PersonInfo from '@/views/PersonInfo'
import Describe from '@/components/Describe/index'
import store from '../store'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/found',
      name: 'Found',
      component: Found
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/describe/:id',
      name: 'Describe',
      component: Describe
    },
    {
      path: '/personinfo',
      name: 'PersonInfo',
      component: PersonInfo
    },
    {
      path: '/listdetails/:id',
      name: 'ListDetails',
      component: ListDetails
    }
  ]
})

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})

export default router
