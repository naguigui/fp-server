import { Request } from 'express'

export interface JwtInterface extends Request {
	req: {
		headers: {
			authorization: String
		}
	}
	user: {
		_id: String
	}
}
