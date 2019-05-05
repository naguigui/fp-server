import { gql } from 'apollo-server-express'
import User from '@/app/graphql/typeDefs/user'
import Routine from '@/app/graphql/typeDefs/routine'

const RootTypeDef = gql`
	type Query
	type Mutation
	schema {
		query: Query
		mutation: Mutation
	}
`

export const typeDefs = [RootTypeDef, User, Routine]
