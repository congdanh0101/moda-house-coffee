const express = require("express");
const router = express.Router();

const DrinkController = require("../app/controller/DrinkController");

router.post("/create", DrinkController.create);
router.put("/update/:id", DrinkController.update);
router.get("/:slug", DrinkController.getDrinkBySlug);
// router.get('/category/:slug',DrinkController.getByCategory)
router.get("/", DrinkController.getAll);

module.exports = router;
