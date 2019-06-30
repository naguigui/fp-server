import { merge } from 'lodash'
import userResolver from '@/app/graphql/resolvers/user'
import routineResolver from '@/app/graphql/resolvers/routine'
import routines from '@/app/graphql/resolvers/routine/routines'

const commonResolvers = {
	User: {
		routines
	}
}

const resolvers = {
	...commonResolvers,
	...userResolver
}

export default merge(resolvers, userResolver, routineResolver)
