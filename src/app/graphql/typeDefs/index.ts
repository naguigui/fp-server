import { gql } from 'apollo-server-express'
import User from './user'

const RootTypeDef = gql`
	type Query
	type Mutation
	schema {
		query: Query
		mutation: Mutation
	}
`

export const typeDefs = [RootTypeDef, User]
