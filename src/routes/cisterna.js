const express = require('express')
const router = express.Router()
const CisternaController = require('../controllers/cisternController')

router.post('/', CisternaController.post)
router.get('/', CisternaController.get)
router.get('/:id', CisternaController.getCisterna)
router.get('/laststatus/:id', CisternaController.getLastStatusCisterna)
router.post('/status', CisternaController.setStatus)

module.exports = router