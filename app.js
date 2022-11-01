const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

// The GraphQL schema
const typeDefs = require('./graphql/schema');

// A map of functions which return data for the schema.
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.yfg1kgy.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`);

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});