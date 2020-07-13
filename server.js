
const path = require('path')
const express = require('express')

const app = express()

// Tehd��n polkum��ritys public kansioon 
const polku = path.join(__dirname, './public')

// Sanotaan ett� em. polussa on tiedostosis�lt� jota palvelin k�ytt�� kun se saa http requestin
app.use(express.static(polku))

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})