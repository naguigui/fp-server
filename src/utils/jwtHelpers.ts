import * as jwt from 'jsonwebtoken'

interface TokenData {
	user: {
		_id: string
	}
}

export const getUser = (req: { headers: { authorization: string } }) => {
	const token = req.headers.authorization

	const user = jwt.verify(
		token,
		process.env.JWT_SECRET,
		(err: Error, decodedToken: TokenData) => {
			if (err || !decodedToken) {
				return null
			}
			return decodedToken.user
		}
	)
	return user
}
