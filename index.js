const form = document.getElementById("form");
const userEmail = document.getElementById("user-email");
const userPass = document.getElementById("user-pass");
const rePass = document.getElementById("confirm-pass");
const checkBox = document.getElementById("check-box");
const data = document.getElementById("data");
const data1 = document.getElementById("data1");
const data2 = document.getElementById("data2");
let formData = document.getElementById("form-data");

// Email validation
function ValidateEmail(userEmail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail.value)) {
    formData.append(`Email is ${userEmail.value}`);
    formData.classList.add("form-data");
    clearData();
  } else {
    let div = document.createElement("div");
    userEmail.insertAdjacentElement("afterend", div);
    div.innerHTML = "invalid email";
    div.style.color = "red";
    userEmail.classList.add("checked-email");
  }
}

// Password validation
function passCheck(userPass) {
  if (userPass.value !== "") {
    formData.append(`Password is ${userPass.value}`);
    formData.classList.add("form-data");
    clearData();
    if (userPass.value.length < 4) {
      data1.innerText = "Your password should be greater than 4 digits";
      data1.classList.add("data1");
      clearData();
    }
  } else {
    userPass.classList.add("checked-pass");
    data1.innerText = "Please enter a password";
    data1.classList.add("massage");
  }
}

// Checkbox check
function checkBoxCheck() {
  if (checkBox !== "checked") {
    checkBox.classList.add("not-checked");
  }
}

// confirm password check
function confirmPass(rePass) {
  if (userPass === rePass) {
    formData.append(`Password ${userPass.value}`);
    formData.classList.add("form-data");
    clearData();
  } else {
    rePass.classList.add("re-pass");
    data2.innerText = "Password does not match";
    data2.classList.add("massage");
  }
}

// Adding event listner
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // For email
  ValidateEmail(userEmail);
  // For password
  passCheck();
  // For confirm password
  confirmPass();
});
