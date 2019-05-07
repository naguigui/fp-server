import Routine from '@/entities/routine'

interface createRoutine {
	userId: string
	name: string
}

class RoutineConnector {
	// async getById(id: string): Promise<object> {
	//     return await User.findById(id)
	// }

	// async getByEmail(email: string): Promise<object> {
	//     return await User.findOne({
	//         email
	//     })
	// }

	// async updateUser(id: string, attr: object): Promise<object> {
	//     return await User.findByIdAndUpdate(id, attr)
	// }

	// async deleteUser(id: string): Promise<object> {
	//     return await User.findByIdAndDelete(id)
	// }

	async getByUserId(userId: string): Promise<object> {
		return await Routine.find({
			userId
		})
	}

	async createRoutine(args: createRoutine): Promise<object> {
		const routine = await Routine.create(args)
		return routine.toObject()
	}
}

export default RoutineConnector
