const express = require('express')
const router = express.Router()
const IotController = require('../controllers/iotController')


router.get('/tag_rfid', IotController.getTagRfid)
router.get('/alltagrfid', IotController.getAllTagsRfid)
router.post('/tag_rfid', IotController.newTagRFID)
router.get('/devices/:id', IotController.getDevice)
// router.get('/devices', IotController.getAllDevices)
router.post('/device', IotController.registerDevice)
router.get('/devices', IotController.getDevices)
router.get('/devicetodelete/:id', IotController.deleteDevice)
router.get('/devices-free', IotController.getAllDevicesFree)

module.exports = router