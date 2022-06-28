const Drink = require("../models/Drink");
const Category = require("../models/Category");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class DrinkController {
  create(req, res, next) {
    const formData = req.body;
    const drink = new Drink(formData);
    drink
      .save()
      .then(() => res.json({ mess: "Add drink successfully" }))
      .catch((err) => res.json({ mess: "Add drink failure" }));
  }

  getAll(req, res, next) {
    Drink.find({})
      .then((drink) =>
        res.render("client/home", {
          drink: multipleMongooseToObject(drink),
        })
      )
      .catch(next);
  }

  update(req, res, next) {
    Drink.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.json({ mess: "Update successfully" }))
      .catch((err) => res.json({ mess: "Update failure" }));
  }
  getByCategory(req, res, next) {
    Drink.find({ category: req.params.id })
      .then((drink) => res.json(drink))
      .catch(next);
  }

  getDrinkByID(req,res,next){
      Drink.findById(req.params.id)
      .then(drink => res.render('client/drink',{
          drink:mongooseToObject(drink)
      })).catch(next)
  }
}

module.exports = new DrinkController();
