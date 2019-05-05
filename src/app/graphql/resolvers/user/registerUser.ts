export default async (_parent: object, args: any, ctx: any): Promise<object> => {
    const {
		models: { User }
    } = ctx

    return await User.registerUser(args)
}