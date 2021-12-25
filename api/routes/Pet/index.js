const express = require('express')
const router = express()
const db = require('../../queryBuild')

router.get('/', async (req, res, next) => {
    try {
        const queryBuilder = new db.exec('Pets')
        let response = await queryBuilder.select('*');
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const queryBuilder = new db.exec('Pets')
        console.log("reqbody :",JSON.stringify(req.body));
        let response = await queryBuilder.insert(req.body);
        console.log("response:",response);
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
})

router.put('/', async (req, res, next) => {
    try {
        console.log("put");
    } catch (error) {
        next(error)
    }
})

module.exports = router;