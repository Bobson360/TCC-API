const express = require('express')
const router = express.Router()
const CisternaController = require('../controllers/cisterna-controller')

router.post('/', CisternaController.post)
router.get('/', CisternaController.get)
router.get('/status/:id', CisternaController.getStatusCisterna)
router.post('/status', CisternaController.setStatusCisterna)

module.exports = router