const express = require('express')
const router = express()
const db = require('../../queryBuild')
const queryBuilder = new db.exec('Human')

router.get('/:humanId?', async (req, res, next) => {
    try {
        if (req.params.humanId) {
            console.log("9 line :",req.body);
            let response = await queryBuilder.select('*').where('Mail', req.params.humanId && 'Password', req.body.Password);
            res.status(200).json(response)
        } else {
            let response = await queryBuilder.select('*');
            res.status(200).json(response)
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router;