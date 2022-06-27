const express = require('express')
const router = express.Router()

const DrinkController = require('../app/controller/DrinkController')

router.post('/create',DrinkController.create)
router.get('/',DrinkController.getAll)
router.put('/:id/update',DrinkController.update)

module.exports = router;