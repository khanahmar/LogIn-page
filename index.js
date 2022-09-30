const form = document.getElementById("form");
const userEmail = document.getElementById("user-email");
const userPass = document.getElementById("user-pass");
const data = document.getElementById("data");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userEmail.value.trim() === "") {
    let massage = document.createElement("div");
    massage.innerText = "invalid email !";
    massage.classList.add("massage");
    data.append(massage);
  }

  form.reset();
});
