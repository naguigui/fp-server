const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('./utils/constants')

const app = express()

const jwtMiddleWare = async (req) => {
	const token = req.headers.authorization
	try {
		const { user } = await jwt.verify(token, JWT_SECRET)
		req.user = user
	} catch (e) {
		console.log(e)
	}
	req.next()
}

app.use(jwtMiddleWare)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

module.exports = { app }
