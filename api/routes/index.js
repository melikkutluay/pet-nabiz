const express = require('express')
const router = express()

router.use('/', require('./Main'))
router.use('/Human', require('./Human'))
router.use('/Process', require('./Process'))
router.use('/Pet', require('./Pet'))
router.use('/Vet', require('./Vet'))

module.exports = router;