const express = require('express')
const router = express()
const apicall = require('../../apicall')
const _ = require('lodash')

router.get('/:humanId?', async (req, res, next) => {
    try {
        if (req.params.humanId) {
            let response = await apicall.get('pet', { Human_id: req.params.humanId });
            res.status(200).json(response)
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router;