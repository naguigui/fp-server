export default async (
	_parent: object,
	_args: object,
	ctx: any
): Promise<object> => {
	const {
		models: { User }
	} = ctx

	const userData = await User.getAllUsers()

	return userData
}
