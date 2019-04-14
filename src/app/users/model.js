const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
	name: String,
	email: String,
	gender: String,
	weight: Number,
	height: Number,
	age: Number
})

module.exports = mongoose.model('User', UserSchema)
