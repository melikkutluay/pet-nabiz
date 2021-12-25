const express = require('express')
const router = express()
const apicall = require('../../apicall')
const _ = require('lodash')
const db = require('../../queryBuild')

router.post('/signIn', async (req, res, next) => {
    console.log("sign_in_req:",req)
    try {
        let response = await apicall.get('Human', req.body);
        if (_.isEmpty(response)) {
            res.status(400).json(400)
        } else {
            res.status(200).json(response)
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router;    