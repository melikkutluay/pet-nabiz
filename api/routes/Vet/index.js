const express = require('express')
const router = express()
const apicall = require('../../apicall')

router.get('/:vetId', async (req, res, next) => {
    try {
        if (req.params.vetId) {
            let response = await apicall.get('Human', { id: req.params.vetId });
            res.status(200).json(response)
        } else {
            let response = await apicall.get('Human', { Role: "Vet"});
            res.status(200).json(response)
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router;