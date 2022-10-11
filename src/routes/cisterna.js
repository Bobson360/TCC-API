const express = require('express')
const router = express.Router()
const CisternaController = require('../controllers/IOT/cisterna-controller')

router.post('/', CisternaController.post)
router.get('/', CisternaController.get)
router.get('/deviceId', CisternaController.getCisternIdByDeviceId)
router.get('/status/:id', CisternaController.getStatusCisterna)
router.get('/laststatus/:id', CisternaController.getLastStatusCisterna)
router.post('/status', CisternaController.setStatusCisternaByGateWay)

module.exports = router