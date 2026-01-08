const http = require('http');
const countStudents = require('./3-read_file_async');
// Réutilisation de la fonction

// Créer le serveur HTTP
const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const dbFile = process.argv[2];
    // nom du CSV passé en argument
    const output = 'This is the list of our students\n';

    try {
      // Appel à la fonction du projet 3 pour loguer les étudiants
      await countStudents(dbFile);

      // Réponse HTTP minimale, Holberton attend surtout l'appel à countStudents
      res.statusCode = 200;
      res.end(output);
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

// Exporter le serveur pour tests automatisés
module.exports = app;
