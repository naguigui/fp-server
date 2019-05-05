import { ResolverMap } from '@/app/interfaces/ResolverType'
import GetAllUsers from '@/app/graphql/resolvers/user/GetAllUsers'
import CurrentUser from '@/app/graphql/resolvers/user/CurrentUser'
import Login from '@/app/graphql/resolvers/user/Login'

export const userResolver: ResolverMap = {
	Query: {
		users: GetAllUsers,
		user: CurrentUser
    },
    Mutation: {
        login: Login
    }
}