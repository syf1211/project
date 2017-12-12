import Vue from 'vue'
import Router from 'vue-router'

import HeaderImg from '@/components/HeaderImg'
import Home from '@/views/Home'
import Upload from '@/views/Upload'
import Comment from '@/views/Home/components/Comment'

import Submit from '@/components/Submit'
import SubmitVideo from '@/views/SubmitVideo'
import CommentEnd from '@/views/CommentEnd'
import UploadSuccess from '@/views/SubmitVideo/components/UploadSuccess'
Vue.use(Router)

let newRouter = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'headerimg/home'
    },
    {
      path: '/headerimg',
      name: 'HeaderImg',
      component: HeaderImg,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'upload',
          name: 'Upload',
          component: Upload
        },
        {
          path: 'comment',
          name: 'Comment',
          component: Comment
        }
      ]
    },
    {
      path: '/submit',
      name: 'Submit',
      component: Submit,
      redirect: 'submit/submitvideo',
      children: [
        {
          path: 'commentend',
          name: 'CommentEnd',
          component: CommentEnd
        },
        {
          path: 'submitvideo',
          name: 'SubmitVideo',
          component: SubmitVideo
        },
        {
          path: 'uploadsuccess',
          name: 'UploadSuccess',
          component: UploadSuccess
        }
      ]
    }
  ]
})
// newRouter.beforeEach((to, from, next) => {
//   if (window.localStorage.getItem('user')) {
//     next()
//   }
// })

export default newRouter
