import { Resolver } from '@/app/interfaces/ResolverType'

export interface meInterface extends Resolver{
	ctx: {
		user: {
			_id: string
		}
	}
}

export interface updateUserInterface extends Resolver {
	args: {
		id: string
		input: any
	}
}

export interface deleteUserInterface extends Resolver {
	args: {
		id: string
	}
}

export interface registerUserInterface extends Resolver {
	args: {
		email: string
		password: string
	}
}

export interface loginInterface extends Resolver {
	args: {
		email: string
		password: string
	}
	ctx: {
		JWT_SECRET: string
		JWT_SECRET_REFRESH: string
	}
}

export interface refreshTokensInterface extends Resolver {
	args: {
		refreshToken: string
	}
	ctx: {
		JWT_SECRET: string
		JWT_SECRET_REFRESH: string
	}
}