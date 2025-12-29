// ========= LOGIN =========
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "admin@dailygoals.com" && password === "admin123") {
    sessionStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login credentials");
  }
}

// ========= CHECK LOGIN =========
function checkLogin() {
  if (!sessionStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
  }
}

// ========= LOGOUT =========
function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

// ========= NAVIGATION =========
function goDashboard() {
  window.location.href = "dashboard.html";
}

function goTasks() {
  window.location.href = "mytasks.html";
}

function goProfile() {
  window.location.href = "profile.html";
}

function goSettings() {
  window.location.href = "settings.html";
}

// ========= NEW TASK MODAL =========
function openNewTask() {
  const modal = document.getElementById("newTaskModal");
  if (modal) modal.style.display = "flex";
}

function closeNewTask() {
  const modal = document.getElementById("newTaskModal");
  if (modal) modal.style.display = "none";
}
