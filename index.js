const mongoose = require('mongoose');
const Joi = require('joi');
const express = require('express');
const genre = require('./route/genres');
const app = express();

mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('connected to mongoDb'))
    .catch(() => console.error('could not connect to mongodb'));

app.use(express.json());
app.use('/api/genres', genre);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));