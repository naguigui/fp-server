export default async (_parent: any, args: any, ctx: any) => {
	const {
		models: { Routine }
	} = ctx

	const { id } = args
	return await Routine.getById(id)
}
