const express = require('express');
const app = express();
const port = 9000;
const routes = require('./routes/v1');
const cors = require('cors');

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

// v1 api routes
app.use('/v1', routes);
app.use('/', (req, res) => res.send({ online: true }));

app.listen(port, () => {
  console.log(`JSONDownloader Server listening on port ${port}`);
});
