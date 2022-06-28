const express = require('express')
const router = express.Router()

const CategoryController = require('../app/controller/CategoryController')

router.post('/create',CategoryController.create)
router.put('/:id/update',CategoryController.update)
router.get('/',CategoryController.getAll)

module.exports = router;