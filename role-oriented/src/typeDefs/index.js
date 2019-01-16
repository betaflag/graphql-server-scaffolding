const { query } = require("./query");
const { bookType } = require("./types");

const typeDefs = [query, bookType];

module.exports = {
  typeDefs,
};
