const express = require('express')
const router = express()

router.get('/', async (req, res, next) => {
    try {
        res.status(200).send("PET VADİSİNE HOŞ GELDİSİNİZ !")
    } catch (error) {
        next(error)
    }
})

module.exports = router;