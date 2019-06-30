class Routine {
	connector: any
	constructor({ connector }: any) {
		this.connector = connector
	}

	async getById(id: string) {
		return this.connector.getById(id)
	}

	async getByUserId(userId: string) {
		return this.connector.getByUserId(userId)
	}

	async createRoutine(metadata: object) {
		return this.connector.createRoutine(metadata)
	}

	async updateRoutine({
		id,
		userId,
		data
	}: {
		id: string
		userId: string
		data: object
	}) {
		return this.connector.createRoutine({
			id,
			userId,
			data
		})
	}
}

export default Routine
