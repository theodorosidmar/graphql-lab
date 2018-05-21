const Server = require('./src/server')
const Database = require('./src/database')

const start = () => {
  const server = new Server()
  const database = new Database()
  server.init()
  database.init()
}

start()
