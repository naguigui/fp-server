import UserModel from '@/models/user'
import RoutineModel from '@/models/routine'

import UserConnector from '@/app/graphql/connectors/userConnector'
import RoutineConnector from '@/app/graphql/connectors/routineConnector'

import { getUser } from '../../utils/jwtHelpers'

export default async ({ req }: any) => {
	const user = getUser(req)

	const userConnector = new UserConnector()
	const routineConnector = new RoutineConnector()

	const models = {
		User: new UserModel({
			connector: userConnector
		}),
		Routine: new RoutineModel({
			connector: routineConnector
		})
	}

	return {
		JWT_SECRET: process.env.JWT_SECRET,
		JWT_SECRET_REFRESH: process.env.JWT_SECRET_REFRESH,
		user,
		models
	}
}
