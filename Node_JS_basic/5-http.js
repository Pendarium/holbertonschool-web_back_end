// Importe le module HTTP de Node.js
const http = require('http');
// Importe la fonction countStudents depuis le fichier 3-read_file_async.js
const countStudents = require('./3-read_file_async');
// Création du serveur HTTP
const app = http.createServer((req, res) => {
  // Définit le type de contenu de la réponse en texte brut
  res.setHeader('Content-Type', 'text/plain');
  // Vérifie si l'URL demandée est la racine "/"
  if (req.url === '/') {
    // Définit le code HTTP 200 = succès
    res.statusCode = 200;
    // Envoie la réponse au client
    res.end('Hello Holberton School!');
    return;
  }
  // Vérifie si l'URL demandée est "/students"
  if (req.url === '/students') {
    // Récupère le chemin de la base de données passé en argument
    const database = process.argv[2];
    // Définit le code HTTP 200 = succès
    res.statusCode = 200;
    // Appelle la fonction countStudents avec le fichier database
    countStudents(database)
      // Si la lecture du fichier fonctionne
      .then((output) => {
        // Envoie la liste des étudiants avec le résultat
        res.end(`This is the list of our students\n${output}`);
      })
      // Si une erreur survient
      .catch((error) => {
        // Envoie le message d'erreur
        res.end(`This is the list of our students\n${error.message}`);
      });
    return;
  }
  // Si aucune route ne correspond
  // Retourne une erreur 404 = page non trouvée
  res.statusCode = 404;
  // Termine la réponse sans contenu
  res.end();
});
// Lance le serveur sur le port 1245
app.listen(1245);
// Exporte le serveur pour pouvoir l'utiliser ailleurs
module.exports = app;
