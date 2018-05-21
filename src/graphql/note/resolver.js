const NoteModel = require('../../models/note')

module.exports = {
  note: ({ id }) => {
    return NoteModel.findById(id).exec()
  },
  notesByUser: ({ userId }) => {
    return NoteModel.find({ userId }).exec()
  },
  addNote: async ({ title, description, userId }) => {
    const note = await NoteModel.create({ title, description, userId })
    return note._id
  },
  updateNote: async ({ id, title, description }) => {
    const note = await NoteModel.findById(id)
    if (!note) {
      return new Error('Note not found')
    }
    if (title) note.firstName = title
    if (description) note.lastName = description
    note.save()
    return note
  },
  removeNote: async ({ id }) => {
    const note = await NoteModel.findByIdAndRemove(id).exec()
    if (!note) {
      return new Error('Note not found')
    }
    return note.id
  }
}
