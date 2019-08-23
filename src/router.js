import Vue from 'vue'
import Router from 'vue-router'

//Router機能
Vue.use(Router)

export default new Router({
    mode: 'history',
    //Routerを使用するURL
    base: process.env.BASE_URL,
    //URL一覧
    routes: [
        {//form
            path: '/kukai',
            name: 'kukai',
            component: () => import('./views/kukai.vue')
        },
        {
            path: '/send',
            name: 'send',
            component: () => import('./views/send.vue')
        },

    ]
})
