import { merge } from 'lodash'
import userResolver from '@/app/graphql/resolvers/user'
import routineResolver from '@/app/graphql/resolvers/routine'
import getRoutines from '@/app/graphql/resolvers/routine/getRoutines'

const commonResolvers = {
	User: {
		routines: getRoutines
	}
}

const resolvers = {
	...commonResolvers,
	...userResolver
}

export default merge(resolvers, userResolver, routineResolver)
