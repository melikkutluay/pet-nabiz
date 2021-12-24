const express = require('express')
const app = express()
const db = require('sqlite3');
const database_file = require('../database.db')
const port = 3000

app.get('/', (req, res) => {
  res.send("SALAKLAR BİR ŞEYİ BECEREMEDİNİZ!")
})

app.listen(process.env.PORT || 3000, function(){
  console.log(`Example app listening at http://localhost:${port}`)
});