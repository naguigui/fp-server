import createRoutine from '@/app/graphql/resolvers/routine/createRoutine'
import updateRoutine from '@/app/graphql/resolvers/routine/updateRoutine'
import getRoutine from '@/app/graphql/resolvers/routine/getRoutine'

export default {
	Query: {
		getRoutine
	},
	Mutation: {
		createRoutine,
		updateRoutine
	}
}
