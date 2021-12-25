const express = require('express')
const router = express()
const config = require('../../api/config')
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: config.database
    },
    useNullAsDefault: true,
});
router.get('/', async (req, res, next) => {
    let response = await knex('users');
    res.status(200).json(response)
})

module.exports = router;