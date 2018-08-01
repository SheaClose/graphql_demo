const message = require("./messageQueries");
const people = require("./peopleQueries");

module.exports = {
  ...message,
  ...people
};
