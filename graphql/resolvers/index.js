const { getMangaTitles, upsertMangaTitle, findMangaTitles, deleteMangaTitle } = require('./manga-title');
const { getMangaAuthors, upsertMangaAuthor, findMangaAuthors, deleteMangaAuthor } = require('./manga-author');
const { getMangaCategories, upsertMangaCategory, findMangaCategories, deleteMangaCategory } = require('./manga-category');
const { getMangas, upsertManga } = require('./manga');

module.exports = {
  Query: {
    getMangas: async() => {
      const mangas = await getMangas();
      return mangas.map(manga => {
        return {
          ...manga._doc,
          titles: findMangaTitles.bind(this, manga.titles), 
          authors: findMangaAuthors.bind(this, manga.authors), 
          categories: findMangaCategories.bind(this, manga.categories),
          update: new Date(manga.update).toISOString()
        };
      });
    },
    getMangaAuthors: async() => {
      const mangaAuthors = await getMangaAuthors();
      return mangaAuthors.map(mangaAuthor => {
        return {
          ...mangaAuthor._doc
        };
      });
    },
    getMangaCategories: async() => {
      const mangaCategories = await getMangaCategories();
      return mangaCategories.map(mangaCategory => {
        return {
          ...mangaCategory._doc
        };
      });
    },
    getMangaTitles: async() => {
      const mangaTitles = await getMangaTitles();
      return mangaTitles.map(mangaTitle => {
        return {
          ...mangaTitle._doc
        };
      });
    }
  },
  Mutation: {
    upsertManga: async (_, args) => {
      const manga = await upsertManga(args.mangaInput);
      return {
        ...manga._doc,
        titles: findMangaTitles.bind(this, manga.titles), 
        authors: findMangaAuthors.bind(this, manga.authors), 
        categories: findMangaCategories.bind(this, manga.categories),
        update: new Date(manga.update).toISOString()
      };
    },
    upsertMangaTitle: async (_, args) => {
      const mangaTitle = await upsertMangaTitle(args.name);
      return {
        ...mangaTitle._doc
      };
    },
    deleteMangaTitle: async (_, args) => {
      return await deleteMangaTitle(args.name);
    },
    upsertMangaAuthor: async (_, args) => {
      const mangaAuthor = await upsertMangaAuthor(args.name);
      return {
        ...mangaAuthor._doc
      };
    },
    deleteMangaAuthor: async (_, args) => {
      return await deleteMangaAuthor(args.name);
    },
    upsertMangaCategory: async (_, args) => {
      const mangaCategory = await upsertMangaCategory(args.name);
      return {
        ...mangaCategory._doc
      };
    },
    deleteMangaCategory: async (_, args) => {
      return await deleteMangaCategory(args.name);
    }
  }
}