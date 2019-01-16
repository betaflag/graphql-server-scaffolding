const { Book } = require("./Book");

const resolvers = {
  Query: {
    books: () => Book.all(),
  },
};

module.exports = {
  resolvers,
}
