const http = require('http');
const fs = require('fs').promises;

// Fonction pour compter les étudiants (version asynchrone, similaire à 3-read_file_async.js)
async function countStudents(path) {
  let data;
  try {
    data = await fs.readFile(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter((line) => line.trim() !== '');
  if (lines.length === 0) return { total: 0, fields: {} };

  const students = lines.slice(1).map((line) => line.split(','));
  const fields = {};
  for (const student of students) {
    const firstName = student[0];
    const field = student[3]; // index du champ "field"
    if (!fields[field]) fields[field] = [];
    fields[field].push(firstName);
  }

  return { total: students.length, fields };
}

// Créer le serveur HTTP
const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const dbFile = process.argv[2]; // récupérer le nom du CSV passé en argument
    let output = 'This is the list of our students\n';

    try {
      const result = await countStudents(dbFile);
      output += `Number of students: ${result.total}\n`;
      for (const [field, names] of Object.entries(result.fields)) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      res.statusCode = 200;
      res.end(output.trim());
    } catch (err) {
      res.statusCode = 500;
      res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Écouter sur le port 1245
app.listen(1245, () => {
  console.log('Server running on port 1245');
});

// Exporter le serveur
module.exports = app;
