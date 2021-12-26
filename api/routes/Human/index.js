const express = require('express')
const router = express()
const apicall = require('../../apicall')
const _ = require('lodash')

router.get('/:humanId?', async (req, res, next) => {
    try {
        if (req.params.petId) {
            let response = await apicall.get('Human', { id: req.params.humanId });
            res.status(200).json(response)
        } else {
            let response = await apicall.get('Human');
            res.status(200).json(response)
        }
    } catch (error) {
        next(error)
    }
})

router.post('/signIn', async (req, res, next) => {
    try {
        console.log("sign in");
        /* let response = await apicall.get('Human', req.body);
        if (_.isEmpty(response)) {
            throw new Error(400);
        } else {
            res.status(200).json(response)
        } */
        res.status(200).json([
            {
                "TC": 3453453,
                "Full_Name": "Ayşe Yılmaz",
                "Mail": "ayseyilmaz@gmail.com",
                "Password": "325335frfe",
                "Phone_Number": 34535534,
                "Role": "Not Vet"
            }
        ])
    } catch (error) {
        next(error)
    }
})

router.post('/signUp', async (req, res, next) => {
    try {
        let response = await apicall.post('Human', req.body);
        if (_.isEmpty(response)) {
            throw new Error(400);
        } else {
            console.log("response :", response);
            res.status(200).json("Succesful Add Human")
        }
    } catch (error) {
        next(error)
    }
})

router.put('/:humanId?', async (req, res, next) => {
    try {
        let response = await apicall.put('Human', req.body);
        console.log("response:", response);
        res.status(200).json("Succesful Update Human")
    } catch (error) {
        next(error)
    }
})

router.delete('/:humanId', async (req, res, next) => {
    try {
        let response = await apicall.delete('Human', { 'id': req.params.humanId });
        console.log("response:", response);
        res.status(200).json("Succesful Delete Human")
    } catch (error) {
        next(error)
    }
})

module.exports = router;    