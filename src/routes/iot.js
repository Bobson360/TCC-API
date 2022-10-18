const express = require('express')
const router = express.Router()
const IotController = require('../controllers/iotController')


router.get('/tag_rfid', IotController.getTagRfid)
router.post('/tag_rfid', IotController.newTagRFID)
router.get('/devices/:id', IotController.getDevice)
router.get('/devices', IotController.getAllDevices)
router.post('/device', IotController.registerDevice)

module.exports = router