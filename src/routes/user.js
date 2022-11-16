const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user-controller')

router.post('/', UserController.post)
router.get('/', UserController.getAll)
router.get('/:id', UserController.get)

module.exports = router