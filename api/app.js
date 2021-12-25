const express = require('express')
const app = express()
const config = require('../api/config')
const router = require('./routes/index')
const port = config.server.port;

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(router);

app.listen(process.env.PORT, function () {
  console.log(`App listening at http://localhost:${port}`)
});