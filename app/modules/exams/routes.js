var express = require('express')
var router = express.Router()
var ctrl = require('./controllers')

router.get('/api/exams', ctrl.index)

module.exports = router