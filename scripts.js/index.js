const authForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

function showRegister() {
  authForm.style.display = "none";
  registerForm.style.display = "block";
}

function showLogin() {
  registerForm.style.display = "none";
  authForm.style.display = "block";

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
    window.location.href = "dashboard.html";
  } else if (role === "employee") {
    window.location.href = "dashboard.html";
  }
});

function redirectToRole() {
  const role = document.getElementById("login-role").value;
  if (role === "manager") {
    window.location.href = "dashboard.html";
  } else if (role === "employee") {
    window.location.href = "dashboard.html";
  } else {
    alert("Please select a role.");
    return false;
  }
  return false;
}
