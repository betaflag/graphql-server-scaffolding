const { books } = require("../data");

class Book {
  static all() {
    return books;
  }
}

module.exports = {
  Book,
};
