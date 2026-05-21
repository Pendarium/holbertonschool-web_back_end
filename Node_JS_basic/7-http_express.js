const express = require('express');
const fs = require('fs');

const app = express();

/**
 * Fonction qui lit le fichier CSV et compte les étudiants
 * Retourne une Promise
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      let totalStudents = 0;
      const results = {};
      const output = [];

      // Découpe le fichier ligne par ligne
      const lines = data.split('\n');

      // Supprime les lignes vides
      const filteredLines = lines.filter((line) => line.trim() !== '');

      // Ignore l'en-tête CSV
      const studentLines = filteredLines.slice(1);

      // Parcours des étudiants
      for (const line of studentLines) {
        totalStudents += 1;

        const content = line.split(',');
        const firstName = content[0];
        const field = content[3];

        // Création de la filière si elle n'existe pas
        if (!(field in results)) {
          results[field] = {
            students_nb: 1,
            students_list: [firstName],
          };
        } else {
          // Ajout des étudiants dans la filière existante
          results[field].students_nb += 1;
          results[field].students_list.push(firstName);
        }
      }

      // Nombre total d'étudiants
      output.push(`Number of students: ${totalStudents}`);

      // Affichage des étudiants par filière
      for (const [key, value] of Object.entries(results)) {
        output.push(
          `Number of students in ${key}: ${value.students_nb}. List: ${value.students_list.join(', ')}`
        );
      }

      // Retourne le résultat final
      resolve(output.join('\n'));
    });
  });
}

/**
 * Route principale
 */
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

/**
 * Route /students
 */
app.get('/students', (req, res) => {
  const database = process.argv[2];

  countStudents(database)
    .then((output) => {
      res.status(200).send(`This is the list of our students\n${output}`);
    })
    .catch((error) => {
      res.status(200).send(`This is the list of our students\n${error.message}`);
    });
});

// Lance le serveur sur le port 1245
app.listen(1245);

// Exporte l'application Express
module.exports = app;
