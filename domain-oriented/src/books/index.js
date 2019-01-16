const { data } = require("./data");
const { Book } = require("./Book");
const { resolvers } = require("./resolvers");
const { typeDef } = require("./typeDef");

module.exports = {
  data,
  Book,
  resolvers,
  typeDef,
};
