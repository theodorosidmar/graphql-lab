const mongoose = require('mongoose')

class Database {
  constructor () {
    mongoose.Promise = global.Promise
    this.connection = mongoose.connection
    this.connection.on('error', (error) => {
      throw error.message
    })
    this.connection.on('open', () => {
      console.log('Database connected')
    })
    this.options = {
      reconnectTries: 10
    }
    this.uri = 'mongodb://graphql-lab-mongo/graphql-lab'
  }

  init () {
    mongoose.connect(this.uri, this.options)
  }
}

module.exports = Database
