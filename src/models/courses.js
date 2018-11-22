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
  koders: {
    type: [String],
    required: true,
    minlength: 1
  },
  mentors: {
    type: [String],
    required: true,
    minlength: 1
  }
})

module.exports = {
  model: mongoose.model('courses', schema),
  schema 
}