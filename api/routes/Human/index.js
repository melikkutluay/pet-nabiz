const express = require('express')
const router = express()
const _ = require('lodash')
const db = require('../../queryBuild')

router.post('/signIn', async (req, res, next) => {
    try {
        const queryBuilder = new db.exec('Human')
        let response = await queryBuilder.select('*').where('Mail', req.body.Mail).where('Password', req.body.Password);
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