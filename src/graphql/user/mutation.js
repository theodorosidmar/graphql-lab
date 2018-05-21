module.exports = `
  addUser(firstName: String!, lastName: String!): ID!
  updateUser(id: ID!, firstName: String, lastName: String): User
  removeUser(id: ID!): ID
`
