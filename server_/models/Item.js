/*
 * @Author: your name
 * @Date: 2020-12-07 22:03:21
 * @LastEditTime: 2020-12-08 11:04:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\server_\models\Category.js
 */
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    icon: { type: String }
})

module.exports = mongoose.model('Item', schema)