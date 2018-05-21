const fs = require('fs')
const { buildSchema } = require('graphql')

const root = {}
let typeMutation = 'type Mutation {'
let typeQuery = 'type Query {'
let types = ''

fs.readdirSync(__dirname).forEach(file => {
  const path = `${__dirname}/${file}`
  const isDirectory = fs.lstatSync(path).isDirectory()
  if (isDirectory) {
    try {
      const hasResolverFile = fs.lstatSync(`${path}/resolver.js`).isFile()
      if (hasResolverFile) {
        const resolver = require(`${path}/resolver`)
        Object.assign(root, resolver)
      }
    } catch (error) {
    }
    try {
      const hasMutationFile = fs.lstatSync(`${path}/mutation.js`).isFile()
      if (hasMutationFile) {
        const mutation = require(`${path}/mutation`)
        typeMutation += mutation
      }
    } catch (error) {
    }
    try {
      const hasQueryFile = fs.lstatSync(`${path}/query.js`).isFile()
      if (hasQueryFile) {
        const query = require(`${path}/query`)
        typeQuery += query
      }
    } catch (error) {
    }
    try {
      const hasTypeFile = fs.lstatSync(`${path}/type.js`).isFile()
      if (hasTypeFile) {
        const type = require(`${path}/type`)
        types += type
      }
    } catch (error) {
    }
  }
})

typeMutation += '}'
typeQuery += '}'
const schema = buildSchema(types + typeQuery + typeMutation)

module.exports = {
  root,
  schema
}
