const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const router = require('./routes/Todorouter')

const cors = require('cors')
const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
  res.send('hello world')

})
app.use('/api', router)

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err))


app.listen(port, () => console.log(`Server started on port ${port}`))