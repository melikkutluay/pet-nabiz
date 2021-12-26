const express = require('express')
const router = express()
const apicall = require('../../apicall')
const _ = require('lodash')

router.get('/:humanId?', async (req, res, next) => {
    try {
        let resArr = [];
        if (req.params.humanId) {
            let response = await apicall.get('pet', { Human_id: req.params.humanId });
            response.forEach(element => {
                let { id, Name, Gender, Genus, Age } = element
                resArr.push({ id, Name, Gender, Genus, Age })
            });
            res.status(200).json(resArr)
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router;