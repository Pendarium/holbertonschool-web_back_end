const fs = require('fs').promises;

async function countStudents(path) {
  let data;

  // Lire le fichier de manière asynchrone
  try {
    data = await fs.readFile(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  // Séparer les lignes et filtrer les vides
  const lines = data.split('\n').filter((line) => line.trim() !== '');
  if (lines.length === 0) {
    console.log('Number of students: 0');
    return;
  }

  // Tableau des étudiants (ignorer la ligne d'en-tête)
  const students = lines.slice(1).map((line) => line.split(','));

  console.log(`Number of students: ${students.length}`);

  // Grouper par champ
  const fields = {};
  for (const student of students) {
    const firstName = student[0];
    const field = student[3]; // index du champ "field"
    if (!fields[field]) fields[field] = [];
    fields[field].push(firstName);
  }

  // Afficher le nombre d'étudiants par champ
  for (const [field, names] of Object.entries(fields)) {
    console.log(
      `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
    );
  }
}

// Export pour tests automatisés
module.exports = countStudents;
