import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

//ログイン機能
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'

//Router機能
Vue.use(Router)

export default new Router({
  mode: 'history',
  //Routerを使用するURL
  base: process.env.BASE_URL,
  //URL一覧
  routes: [
    {//home
      path: '/',
      name: 'home',
      component: Home
    },
    {//ログアウト
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {//ログイン
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {//about
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {//form
      path: '/form',
      name: 'form',
      component: () => import('./views/form.vue')
    },
    {//rain
      path: '/main',
      name: 'main',
      component: () => import('./views/main.vue')
    },

  ]
})
