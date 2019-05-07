import { requiresAuth } from '@/app/graphql/permissions'

export default requiresAuth.createResolver(
	async (_parent: any, args: any, ctx: any): Promise<object> => {
		const {
			models: { User },
			user
		} = ctx
		const { input } = args
		try {
			const { _id: id } = user
			return await User.updateUser(id, input)
		} catch (e) {
			throw new Error('Unable to update user.')
		}
	}
)
