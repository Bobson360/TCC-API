const express = require('express')
const router = express.Router()
const supplierController = require('../controllers/supplier-controller')

router.get('/', supplierController.getAllSuppliers)
router.post('/', supplierController.newSupplier)
router.get('/:id', supplierController.getSupplier)
router.delete('/:id', supplierController.deleteSupplier)
router.post('/getSupplierFree', supplierController.getSupplierFree)

module.exports = router