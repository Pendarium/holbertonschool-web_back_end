const fs = require('fs');

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

      const lines = data.split('\n');
      const filteredLines = lines.filter((line) => line.trim() !== '');
      const studentLines = filteredLines.slice(1);

      for (const line of studentLines) {
        totalStudents += 1;

        const content = line.split(',');
        const firstName = content[0];
        const field = content[3];

        if (!(field in results)) {
          results[field] = {
            students_nb: 1,
            students_list: [firstName],
          };
        } else {
          results[field].students_nb += 1;
          results[field].students_list.push(firstName);
        }
      }

      output.push(`Number of students: ${totalStudents}`);

      for (const [key, value] of Object.entries(results)) {
        output.push(`Number of students in ${key}: ${value.students_nb}. List: ${value.students_list.join(', ')}`);
      }

      for (const line of output) {
        console.log(line);
      }

      resolve(output.join('\n'));
    });
  });
}

module.exports = countStudents;
