module.exports = countStudents;
// Exporte la fonction countStudents pour qu'elle puisse être utilisée dans d'autres fichiers

// Importe le module fs (File System) de Node.js pour lire les fichiers
const fs = require('fs');

// Fonction qui compte les étudiants à partir d'un fichier CSV
function countStudents(path) {

  // Retourne une Promise pour gérer les opérations asynchrones
  return new Promise((resolve, reject) => {

    // Lecture du fichier en UTF-8
    fs.readFile(path, 'utf8', (err, data) => {

      // Si une erreur survient lors de la lecture du fichier
      if (err) {

        // Rejette la Promise avec un message d'erreur
        reject(new Error('Cannot load the database'));
        return;
      }

      // Variable pour compter le nombre total d'étudiants
      let totalStudents = 0;

      // Objet qui va stocker les étudiants par filière
      const results = {};

      // Tableau qui servira à construire le texte final
      const output = [];

      // Découpe le contenu du fichier ligne par ligne
      const lines = data.split('\n');

      // Supprime les lignes vides
      const filteredLines = lines.filter((line) => line.trim() !== '');

      // Ignore la première ligne (en-tête CSV)
      const studentLines = filteredLines.slice(1);

      // Parcourt chaque ligne contenant les données d'un étudiant
      for (const line of studentLines) {

        // Incrémente le nombre total d'étudiants
        totalStudents += 1;

        // Sépare les colonnes de la ligne grâce à la virgule
        const content = line.split(',');

        // Récupère le prénom (première colonne)
        const firstName = content[0];

        // Récupère la filière (quatrième colonne)
        const field = content[3];

        // Si la filière n'existe pas encore dans results
        if (!(field in results)) {

          // Création d'une nouvelle entrée pour cette filière
          results[field] = {
            students_nb: 1, // nombre d'étudiants
            students_list: [firstName], // liste des prénoms
          };
        } else {

          // Sinon on incrémente le nombre d'étudiants
          results[field].students_nb += 1;

          // Et on ajoute le prénom à la liste
          results[field].students_list.push(firstName);
        }
      }

      // Ajoute le nombre total d'étudiants dans le tableau output
      output.push(`Number of students: ${totalStudents}`);

      // Parcourt chaque filière enregistrée dans results
      for (const [key, value] of Object.entries(results)) {

        // Ajoute une ligne formatée avec :
        // - le nom de la filière
        // - le nombre d'étudiants
        // - la liste des prénoms
        output.push(
          `Number of students in ${key}: ${value.students_nb}. List: ${value.students_list.join(', ')}`
        );
      }

      // Résout la Promise avec le texte final
      resolve(output.join('\n'));
    });
  });
}

// Exporte encore une fois la fonction countStudents
module.exports = countStudents;
