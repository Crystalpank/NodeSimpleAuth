const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/authRouter')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async() => {
    try{
        await mongoose.connect('<coonect to db>')
        app.listen(PORT, () => console.log(`Server starting at port ${PORT}`))
    }catch(e){
        console.log(e)
    }
}

start()

