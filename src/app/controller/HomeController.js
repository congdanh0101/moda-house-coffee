const Drink = require("../models/Drink");
const Category = require("../models/Category");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class HomeController {
  getAll(req, res, next) {
    Promise.all([Drink.find({}), Category.find({})])
      .then(([drink, category]) =>
        res.render("client/home", {
          drink: multipleMongooseToObject(drink),
          category: multipleMongooseToObject(category),
        })
      )
      .catch(next);

    // res.render('client/home',{
    //     drink:multipleMongooseToObject(drink),
    //     category: multipleMongooseToObject(category),
    // })
  }
  getByCategory(req, res, next) {
    Promise.all([Drink.find({ category: req.params.id }), Category.find({})])
      .then(([drink, category]) =>
        res.render("client/home", {
          drink: multipleMongooseToObject(drink),
          category: multipleMongooseToObject(category),
        })
      )
      .catch(next);
  }
}

module.exports = new HomeController();
