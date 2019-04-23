import app from '@/app'
import graphQLServer from '@/app/graphql/graphServer'

import '@/db/mongoose'

graphQLServer.applyMiddleware({ app })

app.listen({ port: 3000 })
