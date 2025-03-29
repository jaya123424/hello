
const express = require('express')
const connectdb = require('./config/db')
const player = require('./models/playerModel')
const mongoose = require('mongoose')
const playerRouter = require('./routes/playerRoutes')
const app = express()

app.use(express.json())

app.use('/api/v1/players',playerRouter)


app.listen(4000,()=>{
    console.log('server is listening on 4000')
})


connectdb()