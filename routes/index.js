const express = require('express')
const router = express()

router.use('/', require('./management'))

module.exports = router;