/*
 * @Author: your name
 * @Date: 2020-12-10 17:01:11
 * @LastEditTime: 2020-12-11 15:30:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\server_\models\Article.js
 */
/*
 * @Author: your name
 * @Date: 2020-12-07 22:03:21
 * @LastEditTime: 2020-12-08 19:47:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\server_\models\Category.js
 */
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    items: [{
        image: { type: String },
        url: { type: String }
    }]
})

module.exports = mongoose.model('Ad', schema)