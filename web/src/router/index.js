/*
 * @Author: nanGuo
 * @Date: 2020-12-12 09:06:56
 * @LastEditors: nanGuo
 * @LastEditTime: 2020-12-13 16:36:30
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import  Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {path: '/', name:Home,component: Home}
    ]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
