const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Workout {
    _id: ID!
    title: String!
    time: Int
    distance: Int
  }
  type Query {
  booksearch: [BookSearch]
    booksearch(_id: ID!): BookSearch
  }
  type Mutation {
    createBooksearch(title: String!, time: Int, search: Int): Booksearch
    updateBooksearch(_id: String!, title: String, time: Int, search: Int): Booksearch
    deleteBooksearch(_id: String!): Booksearch
  }
`;

module.exports = typeDefs;