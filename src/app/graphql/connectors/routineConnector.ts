import Routine from '@/entities/routine'

interface createRoutine {
	userId: string
	name: string
}

class RoutineConnector {
	async getById(id: string): Promise<object> {
		return await Routine.findById(id)
	}

	async getByUserId(userId: string): Promise<object> {
		const routine = await Routine.find({
			userId
		})
		return routine
	}

	async createRoutine(args: createRoutine): Promise<object> {
		const routine = await Routine.create(args)
		return routine.toObject()
	}

	async updateRoutine({
		userId,
		id,
		data
	}: {
		userId: string
		id: string
		data: any
	}): Promise<object> {
		return await Routine.findOneAndUpdate(
			{
				_id: id,
				userId
			},
			data
		)
	}
}

export default RoutineConnector
