const express = require('express')
const router = express.Router()

router.get('/', ( req, res ) => {
    res.status(200).send({ route: "get all supliers" })
})

router.post('/', ( req, res ) => {
    res.status(200).send({ route: "new Supplier" })
})

module.exports = router