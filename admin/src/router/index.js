/*
 * @Author: your name
 * @Date: 2020-12-02 08:23:10
 * @LastEditTime: 2020-12-11 22:37:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\admin\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import main from '../views/main.vue'
import categoreEdit from '../views/categoreEdit.vue'
import categoreList from '../views/categoreList.vue'

import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'

import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'

import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'

import AdEdit from '../views/AdEdit.vue'
import AdList from '../views/AdList.vue'

import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'main',
        component: main,
        children: [{
                path: '/categories/create',
                component: categoreEdit
            },
            {
                path: '/categories/list',
                component: categoreList
            },
            {
                path: '/categories/edit/:id',
                component: categoreEdit,
                props: true
            },
            {
                path: '/Item/create',
                component: ItemEdit
            },
            {
                path: '/Item/list',
                component: ItemList
            },
            {
                path: '/Item/edit/:id',
                component: ItemEdit,
                props: true
            },
            {
                path: '/heroes/create',
                component: HeroEdit
            },
            {
                path: '/heroes/list',
                component: HeroList
            },
            {
                path: '/heroes/edit/:id',
                component: HeroEdit,
                props: true
            },

            {
                path: '/articles/create',
                component: ArticleEdit
            },
            {
                path: '/articles/list',
                component: ArticleList
            },
            {
                path: '/articles/edit/:id',
                component: ArticleEdit,
                props: true
            },

            {
                path: '/admin_users/create',
                component: AdminUserEdit
            },
            {
                path: '/admin_users/list',
                component: AdminUserList
            },
            {
                path: '/admin_users/edit/:id',
                component: AdminUserEdit,
                props: true
            },


            {
                path: '/ads/create',
                component: AdEdit
            },
            {
                path: '/ads/list',
                component: AdList
            },
            {
                path: '/ads/edit/:id',
                component: AdEdit,
                props: true
            },

        ]
    },
    {
        path: '/login',
        component: Login,
        isPublic: true
    },

];


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        // 如果用户未能验证身份，则 `next` 会被调用两次
        return next()
    } else if (!to.meta.isPublic && !localStorage.token) {
        return next('/login');
    } else {
        next()
    }
})

export default router