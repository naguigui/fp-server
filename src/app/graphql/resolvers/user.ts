import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { pick } from 'lodash'
import User from '../../users/model'
import { ResolverMap } from '../../interfaces/ResolverType'
import { requiresAuth } from '../permissions'
import {
	meInterface,
	updateUserInterface,
	loginInterface,
	registerUserInterface,
	deleteUserInterface
} from './user-interface'
import { SALT_ROUNDS } from '../../../utils/constants'

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
		updateUser: requiresAuth.createResolver(async (_: any, args: updateUserInterface['args']) => {
			const { id, input } = args
			return (await User.findByIdAndUpdate(id, input).lean()) || null
		}),
		deleteUser: async (_, args: deleteUserInterface['args']) => {
			const { id } = args
			return await User.findByIdAndRemove(id).lean()
		},
		registerUser: async (_, args: registerUserInterface['args']) => {
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
			_,
			args: loginInterface['args'],
			ctx: loginInterface['ctx']
		) => {
			const { email, password } = args
			const { JWT_SECRET } = ctx

			const user = await User.findOne({
				email: email
			}).lean()

			if (!user) {
				throw new Error('Something went wrong')
			}
			const valid = await bcrypt.compare(password, user.password)
			if (!valid) {
				throw new Error('Bad password!')
			}

			const token = jwt.sign(
				{
					user: pick(user, ['_id'])
				},
				JWT_SECRET,
				{
					expiresIn: '1y'
				}
			)
			return token
		}
	}
}
