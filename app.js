const { ApolloServer } = require('apollo-server');

// The GraphQL schema
const typeDefs = require('./graphql/schema');

// A map of functions that return data for the schema
const resolvers = require('./graphql/resolvers');

// DB Models
const models = require('./models');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
});

server.listen().then(({ url }) => {
  console.log(`Server is running @ ${url}`);
});