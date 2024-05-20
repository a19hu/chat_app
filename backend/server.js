const express = require('express')
const { chats } = require('./data/data')
const connectDB = require('./config/db')
const userRouter= require('./router/userRouter')
const dotenv = require("dotenv");
dotenv.config();
const app = express()
const port = 8000
connectDB()
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use('/api/user',userRouter)

app.get('/api', (req, res) => {
    res.send(chats)
    console.log(chats)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})