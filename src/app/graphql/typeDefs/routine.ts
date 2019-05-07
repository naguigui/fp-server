import { gql } from 'apollo-server-express'

export default gql`
	type Routine {
		_id: ID!
		userId: ID!
		name: String!
	}

	extend type Mutation {
		createRoutine(name: String!): Routine!
	}
`
