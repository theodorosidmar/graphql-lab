const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'user'
})

schema.pre('save', (next) => {
  if (!this.created) {
    this.created = new Date()
  }
  next()
})

const model = mongoose.model('user', schema)

module.exports = model
