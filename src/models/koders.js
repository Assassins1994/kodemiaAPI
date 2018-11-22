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
  age: {
    type: Number,
    required: true,
    min: 18
  },
  city: {
    type: String,
    required: true,
    maxlength: 20
  }
})

module.exports = {
  model: mongoose.model('koders', schema),
  schema 
}
