export default function createReportObject(employeesList) {
  const fullObject = {
    /*varrivable de l'objet*/
    allEmployees:  {...employeesList},
    /*list des employes*/
    getNumberOfDepartments(employeesList) {
      /*recupere le departement de l'employees*/
        return Object.keys(employeesList).length;
        /*retourn l'employe en question*/
    }  }
    return fullObject;
    /*retourn l'objet complet qui comporte la listes des employer son departement et l'employer ciblé*/
}
