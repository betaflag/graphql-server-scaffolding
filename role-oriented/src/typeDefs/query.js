const { gql } = require("apollo-server");

const query = gql`
  type Query {
    books: [Book]
  }
`;

module.exports = {
  query,
};
