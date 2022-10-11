const express = require('express')
const router = express.Router()
const IotController = require('../controllers/iotController')


router.get('/tag_rfid', IotController.tag_rfid)

module.exports = router