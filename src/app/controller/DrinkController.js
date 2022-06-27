const Drink = require('../models/Drink')
const {mutipleMongooseToObject} = require('../../util/mongoose')

class DrinkController{
    create(req,res,next){
        const formData = req.body
        const drink = new Drink(formData)
        drink.save()
        .then(()=>res.json({mess:'Add drink successfully'}))
        .catch(err => res.json({mess:'Add drink failure'}))
    }

    getAll(req,res,next){
        Drink.find({})
        .then(drink => res.json(drink))
        .catch(next)
    }

    update(req,res,next){
        Drink.updateOne({_id : req.params.id}, req.body)
        .then(() => res.json({mess:'Update successfully'}))
        .catch(err => res.json({mess:'Update failure'}))
    }
}

module.exports = new DrinkController()