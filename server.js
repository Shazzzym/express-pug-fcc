'use strict';
require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

// Tell Express to use Pug templates
app.set('view engine', 'pug');
app.set('views', './views/pug');

fccTesting(app); // For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route → render index.pug
app.route('/').get((req, res) => {
  res.render('index', { title: 'Welcome', message: 'Hello from Pug!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
