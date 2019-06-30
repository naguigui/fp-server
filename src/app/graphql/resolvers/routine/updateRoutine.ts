export default async (_parent: object, args: any, ctx: any) => {
	const {
		models: { Routine },
		user
	} = ctx
	const { _id: userId } = user
	const { id, input } = args
	console.log(args)

	return await Routine.updateRoutine({ id, userId, data: input })
}
