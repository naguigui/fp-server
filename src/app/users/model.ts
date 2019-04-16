import { Schema, model } from 'mongoose'

const UserSchema = new Schema(
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

export default model('User', UserSchema)
