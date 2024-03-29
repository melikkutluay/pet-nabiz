const express = require('express')
const router = express()
const db = require('./../../queryBuild')
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
            let response = await apicall.get('pet', { id: req.params.petId }, { pet_id: req.params.petId, table: 'process'});

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
        if (_.has(req.body, 'first_time') && _.has(req.body, 'second_time')) {
            let {
                first_time,
                second_time
            } = req.body
            const rawQuery = db.queryClass
            let response = await rawQuery.schema.raw(`select p1.process, p1.process_type, p1.process_date, p2.Name from process p1, pet p2 where p1.pet_id = p2.id and substr(process_date,7)||substr(process_date,4,2)||substr(process_date,1,2) between substr('${first_time}',7)||substr('${first_time}',4,2)||substr('${first_time}',1,2) and substr('${second_time}',7)||substr('${second_time}',4,2)||substr('${second_time}',1,2)`);
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