export default function createReportObject(employeesList) {
  const fullObject = {
    allEmployees:  {...employeesList},
    getNumberOfDepartments(employeesList) {
        return Object.keys(employeesList).length;
    }  }
    return fullObject;
}