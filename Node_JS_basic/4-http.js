const http = require('http');

// Créer le serveur HTTP
const app = http.createServer((req, res) => {
  // Définir le type de contenu en texte brut
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

// Écouter sur le port 1245
app.listen(1245, () => {
  console.log('Server running on port 1245');
});

// Exporter le serveur pour pouvoir l'utiliser ailleurs
module.exports = app;
