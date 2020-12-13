/*
 * @Author: your name
 * @Date: 2020-12-10 17:01:11
 * @LastEditTime: 2020-12-11 19:33:02
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
    username: { type: String },
    password: {
        type: String,
        select: false,
        set(val) {
            // return require('crypto-js/aes').createHash('md5').update(val).digest('hex')
            return require('crypto-js/aes').encrypt(val, 'secret key 123').toString();
        }
    }

})

module.exports = mongoose.model('AdminUser', schema)