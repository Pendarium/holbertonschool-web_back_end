const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const db = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(db)
    .then((report) => {
      res.send(`This is the list of our students\n${report}`);
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;