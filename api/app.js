const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("PET NABIZ'A HOŞ GELDİN !")
})

app.listen(process.env.PORT || 3000, function(){
  console.log(`Example app listening at http://localhost:${port}`)
});

console.log("RUNNİNG");