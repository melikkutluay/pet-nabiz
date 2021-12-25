const express = require('express')
const router = express()
const apicall = require('../../apicall')

router.get('/:processId?', async (req, res, next) => {
    try {
        if (req.params.processId) {
            let response = await apicall.get('Process', { Pet_id: req.params.petId });
            res.status(200).json(response)
        } else {
            let response = await apicall.get('Process');
            res.status(200).json(response)
        }
    } catch (error) {
        next(error)
    }
})

router.post('/',async (req, res, next) => {
    try {
        let response = await apicall.post('Process', req.body);
        console.log("response :", response);
        res.status(200).json("Succesful Add Process")
    } catch (error) {
        next(error)
    }
})


router.put('/:processId?', async (req, res, next) => {
    try {
        let response = await apicall.put('Process', req.body);
        console.log("response:", response);
        res.status(200).json("Succesful Update Process")
    } catch (error) {
        next(error)
    }
})

router.delete('/:processId', async (req, res, next) => {
    try {
        let response = await apicall.delete('Process', { 'id': req.params.processId });
        console.log("response:", response);
        res.status(200).json("Succesful Delete Process")
    } catch (error) {
        next(error)
    }
})

module.exports = router;