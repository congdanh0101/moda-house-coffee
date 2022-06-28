const express = require("express");
const router = express.Router();

const HomeController = require("../app/controller/HomeController");

router.get("/category/:id", HomeController.getByCategory);
router.get("/", HomeController.getAll);

module.exports = router;
