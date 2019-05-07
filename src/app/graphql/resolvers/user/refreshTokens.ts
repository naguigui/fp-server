import { createTokens } from '@/app/services/authService'
import jwt from 'jsonwebtoken'

export default async (_parent: any, args: any, ctx: any): Promise<object> => {
	const { refreshToken } = args
	const {
		JWT_SECRET,
		JWT_SECRET_REFRESH,
		models: { User }
	} = ctx
	let userId
	try {
		const {
			user: { _id }
		} = jwt.decode(refreshToken) as any
		userId = _id
	} catch (err) {
		return {}
	}

	if (!userId) {
		return {}
	}

	const user = await User.getById(userId)

	if (!user) {
		return {}
	}

	try {
		await jwt.verify(refreshToken, JWT_SECRET_REFRESH)
	} catch (err) {
		return {}
	}

	const [newToken, newRefreshToken] = await createTokens(
		user,
		JWT_SECRET,
		JWT_SECRET_REFRESH
	)
	return {
		accessToken: newToken,
		refreshToken: newRefreshToken
	}
}
