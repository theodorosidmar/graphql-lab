const express = require('express')
const graphqlServer = require('express-graphql')
const { root, schema } = require('./graphql')

class Server {
  constructor () {
    this.app = express()
    this.app.use('/graphql', graphqlServer({ schema, rootValue: root, graphiql: true }))
    this.app.use('/', (req, res) => res.end('Working fine')) // Health check route
  }

  init () {
    this.app.listen(3000, () => console.log('Web server running on port 3000!'))
  }
}

module.exports = Server
