const express = require('express')
var mongoose = require('mongoose');

// Express Connection
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

// Mongoose Connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('CONNECTED');
});