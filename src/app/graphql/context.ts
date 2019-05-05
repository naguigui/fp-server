import UserModel from '@/models/user'

import UserConnector from '@/app/graphql/connectors/userConnector'

interface Request {
	req: {
		JWT_SECRET: string
		user: {
			_id: string
		}
	}
}

export default async ({ req }: Request) => {
	const { user } = req

    const userConnector = new UserConnector()

	const models = {
		User: new UserModel({
			connector: userConnector
		})
	}

	return { 
        JWT_SECRET: process.env.JWT_SECRET,
        JWT_SECRET_REFRESH: process.env.JWT_SECRET_REFRESH,
        user, 
        models 
    }
}