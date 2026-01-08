const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');

    const database = process.argv[2];

    try {
      const output = await countStudents(database);
      res.end(`${output}`);
    } catch (error) {
      res.end(error.message);
    }
    return;
  }

  res.statusCode = 404;
  res.end();
});

app.listen(1245);

module.exports = app;
