const express = require('express')
const router = express.Router()
const CisternaController = require('../controllers/IOT/cisterna-controller')

router.post('/', CisternaController.post)
router.get('/', CisternaController.get)
router.get('/deviceId', CisternaController.getCisternIdByDeviceId)
router.get('/status/:id', CisternaController.getStatusCisterna)
router.get('/laststatus/:id', CisternaController.getLastStatusCisterna)
router.get('/status', CisternaController.setStatusCisternaByGateWay)
router.get('/abastecimento', CisternaController.getAllWaterSuppliesTypes)
router.get('/abastecimento/:id', CisternaController.getWaterSuppliesTypes)
router.post('/abastecimento', CisternaController.newWaterSuppliesTypes)
router.post('/agendamento', CisternaController.newScheduling)
router.get('/agendamento', CisternaController.getSchedulesController)
router.post('/getCisternByUser', CisternaController.getCisternByUserController)

module.exports = router