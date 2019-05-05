import { ResolverMap } from '@/app/interfaces/ResolverType'
import getAllUsers from '@/app/graphql/resolvers/user/getAllUsers'
import currentUser from '@/app/graphql/resolvers/user/currentUser'
import updateUser from '@/app/graphql/resolvers/user/updateUser'
import deleteUser from '@/app/graphql/resolvers/user/deleteUser'
import registerUser from '@/app/graphql/resolvers/user/registerUser'
import refreshTokens from '@/app/graphql/resolvers/user/refreshTokens'
import login from '@/app/graphql/resolvers/user/login'

export const userResolver: ResolverMap = {
	Query: {
		users: getAllUsers,
		user: currentUser
    },
    Mutation: {
        login,
        refreshTokens,
        updateUser,
        deleteUser,
        registerUser
    }
}