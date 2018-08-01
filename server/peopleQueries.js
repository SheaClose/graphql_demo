const people = require("./people");
module.exports = {
  people({ first_name, last_name, email, gender, city, country }) {
    if (last_name) return people.filter(c => c.last_name === last_name);
    if (first_name) return people.filter(c => c.first_name === first_name);
    if (email) return people.filter(c => c.email === email);
    if (gender) return people.filter(c => c.gender === gender);
    if (city) return people.filter(c => c.city === city);
    if (country) return people.filter(c => c.country === country);
    else return people;
  }
};
