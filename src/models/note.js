const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  userId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'note'
})

schema.pre('save', (next) => {
  if (!this.created) {
    this.created = new Date()
  }
  next()
})

const model = mongoose.model('note', schema)

module.exports = model
