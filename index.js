import express from 'express'

const app = express()

app.use(express.json())
app.get('/',(req,res)=>{
    res.json({"res":"xd"})
})

app.listen(1234,()=>console.log('ready'));
