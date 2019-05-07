export default async (
	_parent: object,
	_args: object,
	ctx: any
): Promise<object> => {
	const {
		models: { User },
		user
	} = ctx
	if (user) {
		const { _id: id } = user
		return await User.getById(id)
	}
	return null
}
