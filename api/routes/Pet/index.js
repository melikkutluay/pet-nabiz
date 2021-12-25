const express = require('express')
const router = express()
const db = require('../../queryBuild')
const queryBuilder = new db.exec('Pets')

router.get('/', async (req, res, next) => {
    try {
        let response = await queryBuilder.select('*');
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
})

module.exports = router;