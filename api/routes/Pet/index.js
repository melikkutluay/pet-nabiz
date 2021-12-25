const express = require('express')
const router = express()
const db = require('../../queryBuild')

router.post('/', async (req, res, next) => {
    try {
        const queryBuilder = new db.exec('Pets')
        let response = await queryBuilder.insert(req.body);
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
})

module.exports = router;