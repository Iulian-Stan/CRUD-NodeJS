const { gql } = require('apollo-server');

module.exports = gql`
  type MangaTitle {
    _id: ID!
    name: String!
  }

  type MangaAuthor {
    _id: ID!
    name: String!
  }

  type MangaCategory {
    _id: ID!
    name: String!
  }

  type Manga {
    _id: ID!
    titles: [MangaTitle!]!
    authors: [MangaAuthor]
    categories: [MangaCategory]
    update: String!
  } 

  type Query {
    getMangas: [Manga!]!
    getMangaTitles: [MangaTitle!]!
    getMangaAuthors: [MangaAuthor!]!
    getMangaCategories: [MangaCategory!]!
  }

  input MangaInput {
    titles: [String!]!
    authors: [String]
    categories: [String]
    update: String!
  }

  type DeleteResult {
    ok: Int
    deletedCount: Int
    n: Int
  }

  type Mutation {
    upsertMangaTitle(name: String!): MangaTitle!
    deleteMangaTitle(name: String!): DeleteResult!
    upsertMangaAuthor(name: String!): MangaAuthor!
    deleteMangaAuthor(name: String!): DeleteResult!
    upsertMangaCategory(name: String!): MangaCategory!
    deleteMangaCategory(name: String!): DeleteResult!
    upsertManga(mangaInput: MangaInput!): Manga!
  }
`;