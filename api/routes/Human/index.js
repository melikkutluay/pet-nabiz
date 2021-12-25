const express = require('express')
const router = express()
const db = require('../../queryBuild')
const queryBuilder = new db.exec('Human')

router.post('/:humanId?', async (req, res, next) => {
    try {
        console.log(req.body);
        if (req.params.humanId) {
            let response = await queryBuilder.select('*').where('Mail', req.body.Mail).where('Password', req.body.Password);
            //res.status(200).json(response)
            res.status(200).json(200)
        } else {
            let response = await queryBuilder.select('*');
            res.status(200).json(response)
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router;