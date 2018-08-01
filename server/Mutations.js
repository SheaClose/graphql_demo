const people = require("./people");
module.exports = {
  addPerson({ first_name, last_name, email, gender, city, country }) {
    people.push({
      first_name,
      last_name,
      email,
      gender,
      city,
      country
    });
    return people;
  }
};
