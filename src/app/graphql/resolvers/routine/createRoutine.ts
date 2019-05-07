export default async (_parent: object, args: any, ctx: any) => {
	const {
		models: { Routine },
		user
	} = ctx
	const { _id: userId } = user
	const { name } = args

	const routineData = {
		userId,
		name
	}
	return await Routine.createRoutine(routineData)
}
