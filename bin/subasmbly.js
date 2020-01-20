const express = require('express')
const mongoose = require('mongoose');

// Express Connection
const app = express()
const port = 3000

app.get('/api/v1/parts', function (req, res) {
  res.send('GET request to the homepage')
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// Mongoose Connection
mongoose.connect('mongodb://localhost:27017/subasmbly', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('CONNECTED');
});