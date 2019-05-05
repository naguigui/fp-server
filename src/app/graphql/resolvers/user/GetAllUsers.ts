export default async (_parent: object, _args: object, ctx: any): Promise<object> => {
    const {
		models: { User }
	} = ctx

    return await User.getAllUsers()
}