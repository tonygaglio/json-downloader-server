const express = require('express');
const app = express();
const port = 9000;
const routes = require('./routes/v1');
const cors = require('cors');

const allowedOrigins = ['https://downloader.anthony.media', 'http://localhost:3000'];

app.use(
    cors({
        origin: (origin, callback) => {
            // Check if the request origin is allowed
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
    })
);

// v1 api routes
app.use('/v1', routes);
app.use('/', (req, res) => res.send({ online: true }));

app.listen(port, () => {
    console.log(`JSONDownloader Server listening on port ${port}`);
});
