/* eslint-disable no-undef */
require('dotenv').config()
const express = require( 'express')
const productRoutes = require( './interfaces/routes/product_routes.js')

const app = express()


app.use(express.json())
app.use('/products', productRoutes)

app.get('/isLive', (req, res) => {
    res.json({ "res": "YEAH" })
})

const PORT = process.env.PORT || 3000
console.log(PORT);


app.listen(PORT, () => console.log('ready'));
