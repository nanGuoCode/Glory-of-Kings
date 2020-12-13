/*
 * @Author: your name
 * @Date: 2020-12-02 08:23:10
 * @LastEditTime: 2020-12-11 22:50:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\admin\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:3000/admin/api/'
// Vue.prototype.$http = axios
import http from './network/request'

Vue.config.productionTip = false

Vue.prototype.$http = http

Vue.mixin({
    methods: {
        getAuthHeaders() {
            return { Authorization: `Bearer ${localStorage.token}` }
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')