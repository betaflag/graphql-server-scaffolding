const { Book } = require("../models");

const booksResolvers = {
  Query: {
    books: () => Book.all(),
  },
};

module.exports = {
  booksResolvers,
}
