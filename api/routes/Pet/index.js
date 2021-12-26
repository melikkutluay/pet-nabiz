const express = require('express')
const router = express()
const apicall = require('../../apicall')

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
        /* console.log("reqbody:", req.body);
        let a = {
            fist_date: '2021-12-01 00:00:00.000',
            last_date: '2021-12-31 00:00:00.000'
        } */
        let response = await apicall.get('pet', req.body)
        res.status(200).json(response)
    } catch (error) {
        console.log("hata alıyosun");
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        let response = await apicall.post('Pets', req.body);
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