const express = require('express')
const mongoose = require('mongoose')
require ('dotenv/config')


const app = express()

//mongoose.connect(process.env.DATABASE_URL,
//mongoose.connect('mongodb://192.168.2.6/blog',
mongoose.connect('mongodb://localhost/blog'
{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database Connected Successfully'))
    .catch((err) => console.error('Database Not Connected'));

app.use(express.json())
app.use(cors())
app.use('/posts', require('./routes/posts'))

app.get('/', (req, res) => {
    res.send('Home')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Server started on port: ' + port))
