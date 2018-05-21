const UserModel = require('../../models/user')

module.exports = {
  user: ({ id }) => {
    return UserModel.findById(id).exec()
  },
  users: () => {
    return UserModel.find().exec()
  },
  addUser: async ({ firstName, lastName }) => {
    const user = await UserModel.create({ firstName, lastName })
    return user._id
  },
  updateUser: async ({ id, firstName, lastName }) => {
    const user = await UserModel.findById(id)
    if (!user) {
      return new Error('User not found')
    }
    if (firstName) user.firstName = firstName
    if (lastName) user.lastName = lastName
    user.save()
    return user
  },
  removeUser: async ({ id }) => {
    const user = await UserModel.findByIdAndRemove(id).exec()
    if (!user) {
      return new Error('User not found')
    }
    return user.id
  }
}
