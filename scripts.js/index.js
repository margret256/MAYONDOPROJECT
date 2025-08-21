const authForm = document.getElementById("authForm");
const registerForm = document.getElementById("registerForm");

function showRegister() {
  authForm.style.display = "none";
  registerForm.style.display = "block";
}

function showLogin() {
  registerForm.style.display = 'none';
  authForm.style.display = 'block';

  window.location.href = "dashboard.html";
}

function registerUser() {
  const fullName = document.getElementById("newFullName").value;
  alert(`User ${fullName} registered successfully!`);
  showLogin();
}

authForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const role = document.getElementById("loginRole").value;
  if (role === "manager") {
    window.location.href = "manager-dashboard.html";
  } else if (role === "employee") {
    window.location.href = "employee-dashboard.html";
  } else {
    window.location.href = "customer-dashboard.html";
  }
});

function redirectToRole() {
  const role = document.getElementById("login-role").value;
  if (role === "manager") {
    window.location.href = "manager-dashboard.html";
  } else if (role === "employee") {
    window.location.href = "employee-dashboard.html";
  } else if (role === "customer") {
    window.location.href = "customer-dashboard.html";
  } else {
    alert("Please select a role.");
    return false;
  }
  return false;
}
