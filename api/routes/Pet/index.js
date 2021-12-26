const express = require('express')
const router = express()
const apicall = require('../../apicall')
const _ = require('lodash')
const qrCode = require('qrcode');
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))

const generatorQR = async text => {
    try {
        return await qrCode.toDataURL(text)
    } catch (error) {
        console.log(error);
    }
}

router.get('/:petId?', async (req, res, next) => {
    try {
        if (req.params.petId) {
            let response = await apicall.get('pet', { id: req.params.petId });
            let obj = {
                pet: response[0].id,
                human: response[0].Human_id
            }
            let code = await generatorQR(JSON.stringify(obj))
            
            response[0].qrCode = code;
            res.status(200).json(response)
        } else {
            let response = await apicall.get('pet');
            res.status(200).json(response)
        }
    } catch (error) {
        next(error)
    }
})

router.post('/filter', async (req, res, next) => {
    try {
        console.log("asdm");
        if (_.has(req.body, 'first_time') && _.has(req.body, 'second_time')) {
            let response = await apicall.get('process', { process_date: req.body })
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
        let response = await apicall.post('pet', req.body);
        console.log("response :", response);
        res.status(200).json("Succesful Add Pet")
    } catch (error) {
        next(error)
    }
})

router.put('/:petId?', async (req, res, next) => {
    try {
        let response = await apicall.put('Pet', req.body);
        console.log("response:", response);
        res.status(200).json("Succesful Update Pet")
    } catch (error) {
        next(error)
    }
})

router.delete('/:petId', async (req, res, next) => {
    try {
        let response = await apicall.delete('Pet', { 'id': req.params.petId });
        console.log("response:", response);
        res.status(200).json("Succesful Delete Pet")
    } catch (error) {
        next(error)
    }
})

module.exports = router;