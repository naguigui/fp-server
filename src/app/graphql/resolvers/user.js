const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { pick } = require('lodash')
const { SALT_ROUNDS } = require('../../../utils/constants')

const User = require('../../users/model')

const getUsers = async () => {
	return await User.find().lean()
}

const getUser = async (parent, args, context) => {
	const { user } = context
	if (user) {
		const { _id: id } = user
		return await User.findById(id).lean()
	}
	return await User.findById(_id).lean()
}

const createUser = async (parent, args) => {
	const { input } = args
	return await User.create(input).lean()
}

const updateUser = async (parent, args) => {
	const { id, input } = args
	return (await User.findByIdAndUpdate(id, input).lean()) || null
}

const deleteUser = async (parent, args) => {
	const { id } = args
	return await User.findByIdAndRemove(id).lean()
}

const registerUser = async (parent, args) => {
	const data = args
	data.password = await bcrypt.hash(data.password, SALT_ROUNDS)
	const user = await User.create(data)
	return user.toObject()
}

const login = async (parent, args, context) => {
	const { email, password } = args
	const { JWT_SECRET } = context

	const user = await User.findOne({
		email: email
	}).lean()

	if (!user) {
		throw new Error('Something went wrong')
	}
	const valid = await bcrypt.compare(password, user.password)
	if (!valid) {
		throw new Error('Bad password!')
	}

	const token = jwt.sign(
		{
			user: pick(user, ['_id'])
		},
		JWT_SECRET,
		{
			expiresIn: '1y'
		}
	)
	return token
}

module.exports.userResolver = {
	Query: {
		users: getUsers,
		me: getUser
	},
	Mutation: {
		createUser,
		updateUser,
		deleteUser,
		registerUser,
		login
	}
}
