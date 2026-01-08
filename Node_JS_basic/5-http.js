const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    const database = process.argv[2];
    let output = 'This is the list of our students\n';

    try {
      const result = await countStudents(database);
      output += `Number of students: ${result.total}\n`;
      for (const [field, names] of Object.entries(result.fields)) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      res.end(output.trim());
    } catch (error) {
      res.statusCode = 500;
      res.end(error.message);
    }
    return;
  }

  res.statusCode = 404;
  res.end('Not Found');
});

app.listen(1245);
module.exports = app;
