import { Resolver } from '@/app/interfaces/ResolverType'

const createResolver = (resolver: any) => {
	const baseResolver = resolver
	baseResolver.createResolver = (childResolver: Resolver): Resolver => {
		const newResolver = async (
			parent: any,
			args: any,
			context: any,
			info: any
		) => {
			await resolver(parent, args, context, info)
			return childResolver(parent, args, context, info)
		}
		return createResolver(newResolver)
	}
	return baseResolver
}

export const requiresAuth = createResolver(
	(_: object, __: object, ctx: any) => {
		if (!ctx.user || !ctx.user._id) {
			throw new Error('Not authenticated')
		}
	}
)
