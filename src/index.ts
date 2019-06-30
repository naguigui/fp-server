import { graphqlServer, app } from './app'

import './db/mongoose'

const PORT = 3000

graphqlServer.applyMiddleware({ app })

app.listen({ port: PORT }, () => console.log(`Server started on port ${PORT}`))
