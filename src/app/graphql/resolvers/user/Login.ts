import * as bcrypt from 'bcrypt'
import { createTokens } from '@/app/services/authService'
import { loginInterface } from '@/app/interfaces/userInterface'

export default async (
	_parent: object,
	args: loginInterface['args'],
	ctx: any
): Promise<object> => {
	const { email, password } = args
	const {
		JWT_SECRET,
		JWT_SECRET_REFRESH,
		models: { User }
	} = ctx

	const user = await User.getByEmail(email)

	if (!user) {
		throw new Error('Something went wrong')
	}
	const valid = await bcrypt.compare(password, user.password)
	if (!valid) {
		throw new Error('Invalid Login')
	}

	const [accessToken, refreshToken] = await createTokens(
		user,
		JWT_SECRET,
		JWT_SECRET_REFRESH
	)

	return {
		accessToken,
		refreshToken
	}
}
