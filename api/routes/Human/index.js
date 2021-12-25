const express = require('express')
const router = express()
const apicall = require('../../apicall')
const _ = require('lodash')

router.post('/signIn', async (req, res, next) => {
    try {
        let response = await apicall.get('Human', req.body);
        if (_.isEmpty(response)) {
            throw new Error(400);
        } else {
            res.status(200).json(response)
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router;    