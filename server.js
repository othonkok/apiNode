const express = require('express')
const mongoose = require('mongoose')
require ('dotenv/config')


const app = express()

mongoose.connect(process.env.DATABASE_URL,
{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected Successfully'))
    .catch((err) => console.error('Not Connected'));

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Home')
})
app.use('/posts', require('./routes/posts'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Server started on port: ' + port))
