const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const userRouter = require('./Routes/userRoutes')


const app = express()


dotenv.config()
app.use(express.json())
app.use(cors())


app.use('/api/users' , userRouter)

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
)
.then(()=>console.log('Connection successful'))
.catch(()=>console.log('Cannection failed'))

app.listen(3001, ()=>console.log('The server is listening'))