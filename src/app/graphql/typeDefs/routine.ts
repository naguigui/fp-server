import { gql } from 'apollo-server-express'

export default gql`
    type Routine {
        _id: ID!
        name: String!
    }

    extend type Query {
		routines: [Routine]
	}
`