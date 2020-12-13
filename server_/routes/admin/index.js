const { query } = require('express')

/*
 * @Author: your name
 * @Date: 2020-12-07 21:55:12
 * @LastEditTime: 2020-12-11 22:53:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\server_\routes\admin\index.js
 */
module.exports = app => {

    const express = require('express')
    const assert = require('http-assert')
    const router = express.Router({
        mergeParams: true //合并url参数
    })
    const auth = async(req, res, next) => {

        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token, 401, '请先登录 ')
        const { id } = jwt.verify(token, 'shhhhh')
        assert(id, 401, '请先登录 ')
        req.user = await AdminUser.findById(id)
        assert(req.user, 401, '请先登录')
        next()
    }

    var jwt = require('jsonwebtoken');
    const AdminUser = require('../../models/AdminUser')
    router.post('/', async(req, res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })

    router.get('/', async(req, res) => {
        const queryOptions = {}
        if (req.Model.modelName === 'Category') {
            queryOptions.populate = 'parent'
        }
        //  else if (req.Model.modelName === 'Article') {
        //     queryOptions.populate = 'categories'
        // }

        const model = await req.Model.find().setOptions(queryOptions).limit(10)
        res.send(model)
    })

    router.get('/:id', async(req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })

    router.delete('/:id', async(req, res) => {
        const model = await req.Model.findByIdAndDelete(req.params.id, req.body)
        res.send({
            msg: 'sc'
        })
    })

    router.put('/:id', async(req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })


    app.use('/admin/api/rest/:resource', auth, async(req, res, next) => {
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)
        next()
    }, router)

    const multer = require('multer')
    const upload = multer({ dest: __dirname + '/../../uploads' })
    app.use('/admin/api/upload', auth, upload.single('file'), async(req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    app.post('/admin/api/login', async(req, res) => {
            const { username, password } = req.body
                //1.根据用户名查找用户
            const AdminUser = require('../../models/AdminUser')
            const user = await AdminUser.findOne({ username }).select('+password')
            assert(user, 455, '用户不存在')
            const CryptoJS = require('crypto-js')
            var isValid = require('crypto-js').AES.decrypt(user.password, 'secret key 123').toString(CryptoJS.enc.Utf8)
            assert(user, 455, '密码错误')

            //3.token发送
            var token = jwt.sign({ id: user._id }, 'shhhhh');
            res.send(token)
        })
        //错误处理函数
    app.use((err, req, res, next) => {
        res.status(err.statusCode).send({
            msg: err.message
        })
        next()
    })
}