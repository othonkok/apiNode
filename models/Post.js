const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    //required: true
  },
   markdown: {
        type: String,
        //require: true
    },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Post', postSchema)
