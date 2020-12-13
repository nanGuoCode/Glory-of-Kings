/*
 * @Author: your name
 * @Date: 2020-12-07 22:03:21
 * @LastEditTime: 2020-12-11 09:25:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Glory-of-Kings\server_\models\Category.js
 */
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    avatar: { type: String },
    title: { type: String },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    scores: {
        difficult: { type: Number },
        skill: { type: Number },
        attack: { type: Number },
        survive: { type: Number }
    },
    skills: [{
        icon: { type: String },
        name: { type: String },
        description: { type: String },
        tips: { type: String },
    }],
    items1: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
    items2: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
    usageTips: { type: String },
    battleTips: { type: String },
    temTips: { type: String },
    partner: [{
        hero: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
        description: { type: String }
    }],
})

module.exports = mongoose.model('Hero', schema)