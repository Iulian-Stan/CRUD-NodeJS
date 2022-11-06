const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    books: [Book!]!
  }

  type Book {
    id: Int!
    title: String!
    author: String!
    description: String!
    user: User!
  }

  type Query {
    user(id: Int!): User
    allUsers: [User]!
    book(id: Int!): Book
    allBooks: [Book!]!
  }

  type Mutation {
    createUser(
      name: String!,
      email: String!,
      password: String!
    ): User!
    createBook(
      userId: Int!
      title: String!
      author: String!
      description: String!
    ): Book!
  }
`;

module.exports = typeDefs;