
// Type predicate function
function isDirector(
  employee: Director | TeacherClass
): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Execute work based on employee type
function executeWork(employee: Director | TeacherClass): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// Expected tests
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
