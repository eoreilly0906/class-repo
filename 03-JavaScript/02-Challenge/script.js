// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() { 
  const employees = [];
while (true) {
  let firstName = prompt("Enter first name:");
  let lastName = prompt("Enter last name:");
  let salaryInput = prompt("Enter salary:");

  
  let salary = parseFloat(salaryInput);

  
  if (isNaN(salary)) {
    salary = 0; 
  }
  
  let employee = {
    firstName: firstName,
    lastName: lastName,
    salary: salary,
  };

  employees.push(employee);

  let addMore = confirm("Do you want to add another employee?");
  if (!addMore) {
   break;
  }
}
return employees; 
};


 // TODO: Get user input to create and return an array of employee objects


// Display the average salary
const displayAverageSalary = function (employees) {
  // console.log('employees:', employees)
  // TODO: Calculate and display the average salary
  let totalSalary = 0;
  for (let i = 0; i < employees.length; i++) {
    totalSalary += parseFloat(employees[i].salary);
  }
  const averageSalary = totalSalary / employees.length;
  console.log(`The average employee salary between our ${employees.length} employee(s) is $${averageSalary.toFixed(2)}`);
  return averageSalary;
};


// TODO: Calculate and display the average salary
// Select a random employee
const getRandomEmployee = function (employees) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = {
    firstName: employees[randomIndex].firstName, 
    lastName: employees[randomIndex].lastName,
  };
console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);

return randomEmployee;  
};


// Select a random employee


  // TODO: Select and display a random employee



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
