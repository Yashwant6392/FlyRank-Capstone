document.getElementById("settingsForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const theme = document.getElementById("theme").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  alert("Settings saved for " + name + "!");
  console.log("Theme selected:", theme);
});
