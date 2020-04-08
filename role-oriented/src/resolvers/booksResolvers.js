const { Book } = require("../models");

const booksResolvers = {
  Query: {
    books: () => Book.all().books,
  },
};

module.exports = {
  booksResolvers,
}
