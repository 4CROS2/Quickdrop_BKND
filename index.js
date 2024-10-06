/* eslint-disable no-undef */
import dotenv from 'dotenv'
dotenv.config()
console.log('SUPABASE_URL:', process.env.SUPABASE_URL);
import express from 'express'
import productRoutes from './interfaces/routes/product_routes.js'

const app = express()


app.use(express.json())
app.use('/products',productRoutes)

app.get('/isLive',(req,res)=>{
    res.json({"res":"YEAH"})
})

const PORT = process.env.PORT || 3000


app.listen(PORT,()=>console.log('ready'));
