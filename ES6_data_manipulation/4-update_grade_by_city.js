export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find(
        (grade) => grade.studentId === student.id
      );

      let finalGrade = 'N/A';
      if (gradeObj) {
        finalGrade = gradeObj.grade;
      }

      return {
        ...student,
        grade: finalGrade,
      };
    });
}
