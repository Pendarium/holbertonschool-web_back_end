export default function get_list_student_ids(students) {
    if (!Array.isArray(students)) {
        return [];
    }
    return students.map(student => student.id)
}
