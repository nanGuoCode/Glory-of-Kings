/*
 * @Author: your name
 * @Date: 2020-12-12 09:06:56
 * @LastEditTime: 2020-12-12 09:09:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\web\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/common/style.scss'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')