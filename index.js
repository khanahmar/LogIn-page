const form = document.getElementById("form");
const userEmail = document.getElementById("user-email");
const userPass = document.getElementById("user-pass");
const checkBox = document.getElementById("check-box");
const data = document.getElementById("data");
const data1 = document.getElementById("data1");
let formData = document.getElementById("form-data");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userEmail.value.trim() === "") {
    data.innerText = "Please enter an email";
    data.classList.add("massage");
    userEmail.classList.add("checked-email");
  }

  if (userPass.value.trim() === "") {
    if (userPass.value.length < 4) {
      data1.innerText = "Your password should be greater than 4 digits";
      data1.classList.add("data1");
    }

    userPass.classList.add("checked-pass");
    data1.innerText = "Please enter a password";
    data1.classList.add("massage");
  }
  if (checkBox !== "checked") {
    checkBox.classList.add("not-checked");
  } else {
    formData.append(
      `Email : ${userEmail.value} - Password : ${userPass.value} `
    );
    formData.classList.add("form-data");
  }

  clearData();
});

function clearData() {
  userEmail.value = "";
  userPass.value = "";
}
