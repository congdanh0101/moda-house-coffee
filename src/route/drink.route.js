const express = require('express')
const router = express.Router()

const DrinkController = require('../app/controller/DrinkController')

router.post('/create',DrinkController.create)
router.put('/update/:id',DrinkController.update)
router.get('/drink/:id',DrinkController.getDrinkByID)
router.get('/category/:id',DrinkController.getByCategory)
router.get('/',DrinkController.getAll)

module.exports = router;