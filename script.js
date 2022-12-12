function login() {
  const data = document.getElementById("login");
  if (data.nameInput.value == "") {
    alert("Name cannot be empty!");
  } else if (data.password.value == "") {
    alert("Password cannot be empty!");
  } else if (
    data.password.value.length < 6 ||
    data.password.value.length > 12
  ) {
    alert("Password must be between 6-12 characters!");
  } else if (data.nameInput.value != "Taha") {
    alert("Incorrect username");
  } else if (data.password.value != "123456") {
    alert("Incorrect password");
  } else {
    alert("Login succesful!");
    window.location.href = "index.html";
  }
}
