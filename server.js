import express from 'express';
import { apolloServer } from 'apollo-server';
import schema from './data/schema';
import Resolvers from './data/resolvers';


var cors = require('cors');

const GRAPHQL_PORT = 8080;

const graphQLServer = express();
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
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
