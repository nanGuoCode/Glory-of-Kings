/*
 * @Author: your name
 * @Date: 2020-12-07 22:00:10
 * @LastEditTime: 2020-12-07 22:36:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\server_\db\db.js
 */

module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost:27017/node-vue', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}