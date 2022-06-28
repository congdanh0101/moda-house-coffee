const Category = require("../models/Category");
const { multipleMongooseToObject } = require("../../util/mongoose");

class CategoryController {
  create(req, res, next) {
    const formData = req.body;
    const category = new Category(formData);
    category
      .save()
      .then(() => res.json({ mess: "Add category successfully" }))
      .catch((err) => res.json({ mess: "Add category failure" }));
  }

  getAll(req, res, next) {
    Category.find({})
      .then((category) =>
        res.render("client/home", {
          category: multipleMongooseToObject(category),
        })
      )
      .catch(next);
  }

  update(req, res, next) {
    Category.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.json({ mess: "Update successfully" }))
      .catch((err) => res.json({ mess: "Update failure" }));
  }
}

module.exports = new CategoryController();
