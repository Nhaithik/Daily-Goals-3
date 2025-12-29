// LOGIN FUNCTION
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

// LOGOUT FUNCTION
function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

// NAVIGATION
function goDashboard() {
  window.location.href = "dashboard.html";
}

function goTasks() {
  window.location.href = "mytasks.html";
}

function goProfile() {
  window.location.href = "profile.html";
}

// PROFILE SAVE (Frontend Demo)
function saveProfile() {
  const name = document.getElementById("name").value;
  localStorage.setItem("username", name);
  alert("Profile saved successfully!");
}

// PROFILE IMAGE PREVIEW
function loadImage(event) {
  const preview = document.getElementById("preview");
  preview.src = URL.createObjectURL(event.target.files[0]);
}
