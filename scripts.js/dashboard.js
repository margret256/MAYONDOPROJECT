  
    function setUserRole() {
      const role = document.getElementById('roleSelector').value;
      localStorage.setItem('userRole', role);
      document.getElementById('userRole').textContent = role;
      updateManagerView(role);
    }

    function updateManagerView(role) {
      const managerCards = document.querySelectorAll('.manager-only');
      managerCards.forEach(card => {
        card.classList.toggle('hidden', role.toLowerCase() !== 'manager');
      });
    }

    const savedRole = localStorage.getItem('userRole') || 'Employee';
    document.getElementById('userRole').textContent = savedRole;
    updateManagerView(savedRole);

    function logout() {
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('userRole');
      window.location.href = 'login.html';
    }
  