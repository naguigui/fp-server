export default async (
	_parent: object,
	args: any,
	ctx: any
): Promise<object> => {
	const {
		models: { User }
	} = ctx

	const { id } = args

	return await User.deleteUser(id)
}
