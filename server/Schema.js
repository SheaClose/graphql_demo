const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type Query {
    message: String
    people(
      first_name: String, 
      last_name: String,
      email: String,
      gender: String,
      city: String,
      country: String
    ): [Person]
  }
  type Mutation{
    addPerson(first_name: String, 
      last_name: String,
      email: String,
      gender: String,
      city: String,
      country: String): [Person]
  }
  type Person {
    first_name: String
    last_name: String
    email: String
    gender: String
    city: String
    country: String
  }
`);
