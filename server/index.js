const express = require("express");
const app = express();
const cors = require("cors");
const { json } = require("body-parser");
const port = process.env.PORT || 3001;
const express_graphql = require("express-graphql");
const schema = require("./Schema");
const queries = require("./Queries");
const mutations = require("./Mutations");

const rootValue = {
  ...queries,
  ...mutations
};

app.use(cors());
app.use(json());

/** GRAPHQL */

app.use(
  "/graphql",
  express_graphql({
    schema,
    rootValue,
    graphiql: true
  })
);

app.listen(port, () => console.log(`Listening on port: ${port}`));
