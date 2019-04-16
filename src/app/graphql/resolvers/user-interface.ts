export interface meInterface {
	context: {
		user: {
			_id: string
		}
	}
}

export interface updateUserInterface {
	args: {
		id: string
		input: any
	}
}

export interface deleteUserInterface {
	args: {
		id: string
	}
}

export interface registerUserInterface {
	args: {
		email: string
		password: string
	}
}

export interface loginInterface {
	args: {
		email: string
		password: string
	}
	context: {
		JWT_SECRET: string
	}
}
