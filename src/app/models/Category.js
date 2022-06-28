const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema

const Category = new Schema({
    name: String,
    slug: {type: String, slug:'name', unique:true},
},{
    timestamps:true
})


//Add plugin
Category.plugin(slug)
Category.plugin(mongooseDelete,{
    deletedAt:true,
    overrideMethods: 'all',
})

module.exports = mongoose.model('Category',Category)
