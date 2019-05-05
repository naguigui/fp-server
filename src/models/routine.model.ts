import { prop, Typegoose } from 'typegoose';
import * as mongoose from 'mongoose'

class Routine extends Typegoose {
    @prop({ required: true })
    userId: string

	@prop({ required: true })
	name: string;
}

export default new Routine().getModelForClass(Routine, {
	existingMongoose: mongoose,
	schemaOptions: { collection: 'routine'}
});