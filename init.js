// Renders the the employees' information in the table
function displayEmployees(employees) {
  const employeesTableBody = document.getElementById("employees");
  const numResultsEl = document.getElementById("num-results");
  const tableRows = employees.map(employee => {
    return `
      <tr>
        <td>${employee.name.last}, ${employee.name.first}</td>
        <td>${employee.email}</td>
        <td>${employee.role}</td>
        <td>${employee.manager.name.first} ${employee.manager.name.last} (${employee.manager.id || "no manager"})</td>
        <td>${employee.salary}</td>
      </tr>
    `;
  });
  employeesTableBody.innerHTML = tableRows.join("");
  numResultsEl.innerHTML = employees.length;
}
