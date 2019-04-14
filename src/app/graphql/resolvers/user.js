const User = require('../../users/model')

const getUsers = async () => {
	const users = await User.find()
	return users.map((user) => user.toObject())
}

const getUser = async (_, args) => {
	const { id } = args
	const user = await User.findById(id)
	return user.toObject()
}

const createUser = async (_, args) => {
	const { input } = args
	const user = await User.create(input)
	return user.toObject()
}

const updateUser = async (_, args) => {
	const { id, input } = args
	const user = await User.findByIdAndUpdate(id, input)
	return user ? user.toObject() : null
}

const deleteUser = async (_, args) => {
	const { id } = args
	const user = await User.findByIdAndRemove(id)
	return user.toObject()
}

module.exports.userResolver = {
	Query: {
		users: getUsers,
		user: getUser
	},
	Mutation: {
		createUser,
		updateUser,
		deleteUser
	}
}
