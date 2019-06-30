export default async (parent: any, _args: any, ctx: any) => {
	const {
		models: { Routine }
	} = ctx

	const { _id: userId } = parent

	try {
		return Routine.getByUserId(userId)
	} catch (e) {
		return e
	}
}
