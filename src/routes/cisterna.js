const express = require('express')
const router = express.Router()
const CisternaController = require('../controllers/cisterna-controller')

router.post('/', CisternaController.post)
router.get('/', CisternaController.get)

module.exports = router