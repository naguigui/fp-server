class Routine {
	connector: any
	constructor({ connector }: any) {
		this.connector = connector
	}

	async getByUserId(userId: string) {
		return this.connector.getByUserId(userId)
	}

	async createRoutine(metadata: object) {
		return this.connector.createRoutine(metadata)
	}
}

export default Routine
