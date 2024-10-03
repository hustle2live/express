const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const quotesRouter = require('./server/router');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
   cors({
      origin: '*',
      methods: ['POST', 'GET', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-type', 'Authorization']
   })
);

app.use('/api', quotesRouter);

app.listen(port, () => {
   console.log(`Server-app is listening on port http://localhost:${port}`);
});
