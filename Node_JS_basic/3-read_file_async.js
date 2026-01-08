const fs = require('fs').promises;

async function countStudents(path) {
  let data;

  try {
    data = await fs.readFile(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter((line) => line.trim() !== '');
  if (lines.length === 0) return { total: 0, fields: {} }; // <- retourner un objet même vide

  const students = lines.slice(1).map((line) => line.split(','));
  const fields = {};

  for (const student of students) {
    const firstName = student[0];
    const field = student[3]; // index du champ "field"
    if (!fields[field]) fields[field] = [];
    fields[field].push(firstName);
  }

  return { total: students.length, fields }; // <- retourner un objet avec les données
}

module.exports = countStudents;
