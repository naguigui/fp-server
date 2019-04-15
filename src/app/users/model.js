const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
	{
		name: String,
		email: String,
		password: String,
		gender: String,
		weight: Number,
		height: Number,
		age: Number
	},
	{ timestamps: { createdAt: 'created_at' } }
)

module.exports = mongoose.model('User', UserSchema)
