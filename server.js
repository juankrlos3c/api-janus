const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const app = express();
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
app.use(morgan('dev'));

dotenv.config({ path: './config/config.env' });

connectDB();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.use(express.static('public'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, (console.log(`server started on port ${PORT}`)));
