const mongoose = require('mongoose')

const {Schema} = mongoose

const schema = new Schema({
  name: {
    required: true,
    type: String,
    trim: true,
    maxlength: 20,
    minlength: 1
  },
  edad: {
    type: Number,
    required: true,
    min: 10
  }
})

module.exports = {
  model: mongoose.model('mentors', schema),
  schema 
}