const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema

const Drink = new Schema({
    name: String,
    slug: {type: String, slug:'name', unique:true},
    price: Number,
    description: String
},{
    timestamps:true
})


//Add plugin
Drink.plugin(slug)
Drink.plugin(mongooseDelete,{
    deletedAt:true,
    overrideMethods: 'all',
})

module.exports = mongoose.model('Drink',Drink)
