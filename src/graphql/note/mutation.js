module.exports = `
  addNote(title: String!, description: String, userId: ID!): ID!
  updateNote(id: ID!, title: String, description: String): Note
  removeNote(id: ID!): ID
`
