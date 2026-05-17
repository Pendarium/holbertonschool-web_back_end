const express = require('express');
const fs = require('fs');

// Function that parse csv
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', ((err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const results = {};

      const lines = data.split('\n'); // le fichier devient un tableau de ligne en se basant sur \n pour répartir les lignes
      const filteredLines = lines.filter((line) => line.trim() !== ''); // retirer les lignes vides
      const studentLines = filteredLines.slice(1);
      // on lit le tableau de ligne à partir de l'index 1 (sans les entêtes)

      for (const line of studentLines) { // pour chaque ligne...
        const content = line.split(','); // va faire un tableau en séparant les valeurs via la ','
        if (!(content[3] in results)) {
          results[content[3]] = { students_nb: 1, students_list: [content[0]] };
        } else {
          results[content[3]].students_nb += 1;
          results[content[3]].students_list.push(content[0]);
        }
      }
      resolve(results);
    }));
  });
}

const app = express();
const port = 1245;

const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
    const results = await countStudents(database);
    let totalStudents = 0;
    for (const key of Object.keys(results)) {
    // for in parcourerait les propriétés pas seulement de results
    // mais aussi du prototype (ce dont hérite les objets/dict)
    // les méthodes object.keys() / object.values() / object.entries()
    // permettent d'ignorer les propriétés liées au prototype
      totalStudents += results[key].students_nb;
    }
    res.write(`Number of students: ${totalStudents}\n`);
    for (const [key, value] of Object.entries(results)) {
      res.write(`Number of students in ${key}: ${value.students_nb}. List: ${value.students_list.join(', ')}\n`);
    }
    res.end();
  } catch (error) {
    res.write(error.message);
    res.end();
  }
});

module.exports = app;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
