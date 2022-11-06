const bcrypt = require('bcryptjs');

const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.User.findByPk(id);
    },
    async allUsers(root, args, { models }) {
      return models.User.findAll();
    },
    async book(root, { id }, { models }) {
      return models.Book.findByPk(id);
    },
    async allBooks(root, args, { models }) {
      return models.Book.findAll();
    }
  },
  Mutation: {
    async createUser(root, { name, email, password }, { models }) {
      return models.User.create({ name, email, password: await bcrypt.hash(password, 10) });
    },
    async updateUser(root, { id, name, email, password }, { models }) {
      const user = await models.User.findByPk(id);
      return user ? user.update({ name, email, password: await bcrypt.hash(password, 10) }) : user;
    },
    async deleteUser(root, { id }, { models }) {
      const user = await models.User.findByPk(id);
      return user ? user.destroy() : user;
    },
    async createBook(root, { userId, title, author, description }, { models }) {
      return models.Book.create({ userId, title, author, description });
    },
    async updateBook(root, { id, userId, title, author, description }, { models }) {
      const book = await models.Book.findByPk(id);
      return book ? book.update({ userId, title, author, description }) : book;
    },
    async deleteBook(root, { id }, { models }) {
      const book = await models.Book.findByPk(id);
      return book ? book.destroy() : book;
    }
  },
  User: {
    async books(user) {
      return user.getBooks();
    }
  },
  Book: {
    async user(book) {
      return book.getUser();
    }
  }
};

module.exports = resolvers;