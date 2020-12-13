/*
 * @Author: your name
 * @Date: 2020-12-07 21:52:36
 * @LastEditTime: 2020-12-11 22:57:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\server_\index.js
 */
const express = require('express')
var history = require('connect-history-api-fallback');
const app = express()
app.use(express.json())

app.use(require('cors')())
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use(history());
require('./db/db')(app)
require('./routes/admin')(app)



app.listen(3000, () => {
    console.log("-------------服务启动成功---------------");
})