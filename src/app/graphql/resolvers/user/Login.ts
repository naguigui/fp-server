import * as bcrypt from 'bcrypt'
import User from '@/entities/user'
import { createTokens } from '@/app/services/authService'
import { loginInterface } from '@/app/interfaces/user-interface'

export default async (_parent: object, args: loginInterface['args'], ctx: any) => {
    const { email, password } = args
			const { JWT_SECRET, JWT_SECRET_REFRESH } = ctx

			const user = await User.findOne({
				email: email
			}).lean()

			if (!user) {
				throw new Error('Something went wrong')
			}
			const valid = await bcrypt.compare(password, user.password)
			if (!valid) {
				throw new Error('Invalid Login')
			}

			const [accessToken, refreshToken] = await createTokens(user, JWT_SECRET, JWT_SECRET_REFRESH)

			return {
				accessToken,
				refreshToken
			}
}