import { prop, Typegoose } from 'typegoose'
import * as mongoose from 'mongoose'

class User extends Typegoose {
	@prop()
	name?: string

	@prop({ required: true })
	email: string

	@prop({ required: true })
	password: string

	@prop()
	gender?: string

	@prop()
	weight?: number

	@prop()
	height?: number

	@prop()
	age?: number

	@prop({ default: Date.now() }) time: Date
	createdAt: Date
}

export default new User().getModelForClass(User, {
	existingMongoose: mongoose,
	schemaOptions: { collection: 'users' }
})
