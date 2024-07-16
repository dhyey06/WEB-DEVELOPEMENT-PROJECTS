const employeeTable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    const addEmployeeBtn = document.getElementById('addEmployeeBtn');

    // Sample employee data
    const employees = [
    
    ];

    // Function to populate the employee table
    function populateEmployeeTable() {
      employeeTable.innerHTML = ''; // Clear existing rows
      employees.forEach(employee => {
        const row = employeeTable.insertRow();
        const avatarCell = row.insertCell();
        const titleCell = row.insertCell();
        const statusCell = row.insertCell();
        const roleCell = row.insertCell();
        const actionCell = row.insertCell();

        avatarCell.innerHTML = `<div class="box"><div class="avatar">${employee.name.charAt(0)}</div>${employee.name}<br>${employee.email}</div>`
        ;
        // nameCell.innerHTML = ``;
        titleCell.innerHTML = employee.title;
        statusCell.innerHTML = `<span class="active">${employee.status}</span>`;
        roleCell.innerHTML =`${employee.role}`;
        actionCell.innerHTML = `<button class="edit">Edit</button>`;
      });
    }

    // Add event listener to the Add New Employee button
    addEmployeeBtn.addEventListener('click', () => {
      // Prompt the user for employee information (you can implement a modal or form here)
      const newName = prompt("Enter employee name:");
      const newEmail = prompt("Enter employee email:");
      const newTitle = prompt("Enter employee Title:");
      const newRole = prompt("Enter employee role:");

      // Add the new employee to the employees array
      employees.push({ name: newName, email: newEmail, title: newTitle, status: 'Active', role: newRole });
      // Repopulate the table
      populateEmployeeTable();
    });

    // Initial population of the table
    populateEmployeeTable();