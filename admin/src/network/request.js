/*
 * @Author: your name
 * @Date: 2020-12-02 21:30:10
 * @LastEditTime: 2020-12-11 22:54:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\admin\network\request.js
 */
import axios from 'axios'
import Vue from 'vue'
import router from '../router/index'

const http = axios.create({
    baseURL: 'http://localhost:3000/admin/api/'
})

http.interceptors.request.use(function(config) {
    // Do something before request is sent
    if (localStorage.token) {
        config.headers.Authorization = 'Bearer ' + localStorage.token
    }
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});


http.interceptors.response.use(response => {
    return response;
}, err => {
    if (err.response.data.msg) {
        Vue.prototype.$message({
            message: err.response.data.msg
        })
    }
    if (err.response.status === 401) {
        router.push('/login')
    }
    return Promise.reject(err)
})
export default http