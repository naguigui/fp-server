import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '@/entities/user'
import { ResolverMap } from '@/app/interfaces/ResolverType'
import { requiresAuth } from '@/app/graphql/permissions'
import {
	meInterface,
	updateUserInterface,
	loginInterface,
	registerUserInterface,
	deleteUserInterface,
	refreshTokensInterface
} from '@/app/interfaces/user-interface'
import { SALT_ROUNDS } from '@/utils/constants'
import { createTokens } from '@/app/services/authService'

export const userResolver: ResolverMap = {
	Query: {
		users: async () => {
			return await User.find().lean()
		},
		me: async (_, __, ctx: meInterface['ctx']) => {
			const { user } = ctx
			if (user) {
				const { _id } = user
				return await User.findById(_id).lean()
			}
			return null
		}
	},
	Mutation: {
		updateUser: requiresAuth.createResolver(async (_parent: any, args: updateUserInterface['args']) => {
			const { id, input } = args
			return await User.findByIdAndUpdate(id, input).lean()
		}),
		deleteUser: async (_parent, args: deleteUserInterface['args']) => {
			const { id } = args
			return await User.findByIdAndRemove(id).lean()
		},
		registerUser: async (_parent, args: registerUserInterface['args']) => {
			const data = args

			// Check if email already exists
			const user = await User.findOne({
				email: data.email
			}).lean()
			
			if (user) {
				throw new Error("Email already exists")
			}

			data.password = await bcrypt.hash(data.password, SALT_ROUNDS)
			const userToRegister = await User.create(data)
			return userToRegister.toObject()
		},
		login: async (
			_parent,
			args: loginInterface['args'],
			ctx: loginInterface['ctx']
		) => {
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
		},
		refreshTokens: async (
			_parent,
			args: refreshTokensInterface['args'],
			ctx: refreshTokensInterface['ctx']
		) => {
			const { refreshToken } = args
			const { JWT_SECRET, JWT_SECRET_REFRESH } = ctx
			let userId;
			try {
			  const { user: { _id } } = jwt.decode(refreshToken) as any;
			  userId = _id;
			} catch (err) {
			  return {};
			}
		  
			if (!userId) {
			  return {};
			}
		  
			const user = await User.findById(userId).lean()
		  
			if (!user) {
			  return {};
			}

			try {
			  await jwt.verify(refreshToken, JWT_SECRET_REFRESH);
			} catch (err) {
			  return {};
			}
		  
			const [newToken, newRefreshToken] = await createTokens(user, JWT_SECRET, JWT_SECRET_REFRESH);
			return {
			  accessToken: newToken,
			  refreshToken: newRefreshToken
			};
		},
	}
}
