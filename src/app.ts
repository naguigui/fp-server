import express from 'express'
import * as bodyParser from 'body-parser'
import * as jwt from 'jsonwebtoken'
import { JwtInterface } from './app/interfaces/App'

const app: express.Application = express()

const jwtMiddleWare = async (req: JwtInterface) => {
	const token = req.headers.authorization
	try {
		const { user } = (await jwt.verify(token, process.env.JWT_SECRET)) as any
		req.user = user
	} catch (e) {
		console.log(e)
	}
	req.next()
}

app.use(jwtMiddleWare)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

export default app
