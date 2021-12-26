const express = require('express')
const router = express()
const apicall = require('../../apicall')
const _ = require('lodash')

router.get('/:petId?', async (req, res, next) => {
    try {
        if (req.params.petId) {
            let response = await apicall.get('Pets', { id: req.params.petId });
            res.status(200).json(response)
        } else {
            let response = await apicall.get('Pets');
            res.status(200).json(response)
        }
    } catch (error) {
        next(error)
    }
})

router.post('/filter', async (req, res, next) => {
    try {
        if (_.has(req.body, 'first_time') && _.has(req.body, 'second_time')) {
            let response = await apicall.get('process', {process_date: [req.body.first_time, req.body.second_time]})
            res.status(200).json(response);
        } else {
            let response = await apicall.get('process', req.body)
            res.status(200).json(response)
        }
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        console.log("req:",req.body);
        let response = await apicall.post('pet', req.body);
        console.log("response :", response);
        res.status(200).json("Succesful Add Pet")
    } catch (error) {
        next(error)
    }
})

router.put('/:petId?', async (req, res, next) => {
    try {
        let response = await apicall.put('Pets', req.body);
        console.log("response:", response);
        res.status(200).json("Succesful Update Pet")
    } catch (error) {
        next(error)
    }
})

router.delete('/:petId', async (req, res, next) => {
    try {
        let response = await apicall.delete('Pets', { 'id': req.params.petId });
        console.log("response:", response);
        res.status(200).json("Succesful Delete Pet")
    } catch (error) {
        next(error)
    }
})

module.exports = router;