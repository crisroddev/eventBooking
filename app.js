const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
//{Estan las propiedades de los schemas}
const { buildSchema } = require('graphql');

const app = express();

// Parse JSON bodys
app.use(bodyParser.json());

// //Parametros: req(request), res(response), next. Coemntado por que asi se hace en express
// app.get('/', (req, res, next) => {
//     res.send('Hello Wold!!!');
// })

// GraphQL endpoint donde se manda todo
app.use(
    '/graphql',
    graphqlHttp({
    //Confuguro graphql API, donde esta el schema, querys, resolvers
    schema: buildSchema(`
        type RootQuery {
            events: [String!]!
        }
        type RootMutation {
            createEvent(name: String): String
        }
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
      events: () => {
        return ['Romantic Cooking', 'Sailing', 'All-Night Coding'];
      },
      createEvent: (args) => {
        const eventName = args.name;
        return eventName;
      }
    },
    graphiql: true
  })
);

app.listen(3000);
