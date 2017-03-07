import express from 'express';
import { apolloServer } from 'apollo-server';
import schema from './data/schema';
import Resolvers from './data/resolvers';

var cors = require('cors');
const graphQLServer = express();
graphQLServer.set('port', (process.env.PORT || 5000));

graphQLServer.use(cors());
graphQLServer.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema: schema,
  //mocks: Mocks,
  resolvers: Resolvers,
  allowUndefinedInResolver : false,
  printErrors : true,
}));
graphQLServer.listen(graphQLServer.get('port'), () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
