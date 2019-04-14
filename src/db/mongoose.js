const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const db = process.env.MONGO_URL

mongoose
	.connect(db, {
		useCreateIndex: true,
		useNewUrlParser: true
	})
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.log(err))
