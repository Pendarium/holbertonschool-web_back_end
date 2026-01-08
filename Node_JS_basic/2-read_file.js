const fs = require('fs');

function countStudents(path) {
  let data;

  // 1️⃣ Essayer de lire le fichier
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  // 2️⃣ Séparer les lignes et filtrer les vides
  const lines = data.split('\n').filter((line) => line.trim() !== '');
  if (lines.length === 0) {
    console.log('Number of students: 0');
    return;
  }

  // 3️⃣ Tableau des étudiants (ignorer la ligne d'en-tête)
  const students = lines.slice(1).map((line) => line.split(','));

  console.log(`Number of students: ${students.length}`);

  // 4️⃣ Grouper par champ (field)
  const fields = {};
  for (const student of students) {
    const firstName = student[0];
    const field = student[3]; // index du champ
    if (!fields[field]) fields[field] = [];
    fields[field].push(firstName);
  }

  // 5️⃣ Afficher le nombre d'étudiants par champ
  for (const [field, names] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
}

// Export pour tests automatisés
module.exports = countStudents;
