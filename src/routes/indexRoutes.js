const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).send({
        name: "cistech",
        title: "Node Store API With Express js",
        version: "0.0.1",
    })
})

router.post('/', (req, res, next) => {
    res.status(200).send(req.body)
})

router.get('/about', (req, res, next) => {
    res.status(200).send({
        name: "cistech",
        title: "Node Store API With Express js",
        version: "0.0.1",
    })
})

module.exports = router