const inputPswEl = document.getElementById("psw");
const lowerCaseLetterEl = document.getElementById("lowercase-letter");
const upperCaseLetterEl = document.getElementById("uppercase-letter");
const numberEl = document.getElementById("number");
const lenghtEl = document.getElementById("lenght");
const specialCharEl = document.getElementById("special-char");

inputPswEl.addEventListener("focus", () => {
  //usr te clicat l' input de la psw
  console.log("dsaf");
  document.getElementById("message").style.visibility = "visible";
});

inputPswEl.addEventListener("blur", () => {
  //usr clica defora del psw
  document.getElementById("message").style.visibility = "hidden";
});

inputPswEl.addEventListener("keyup", () => {
  //usr escriu
  const lowerCaseLetters = /[a-z]/g;
  if (inputPswEl.value.match(lowerCaseLetters)) {
    lowerCaseLetterEl.classList.remove("invalid");
    lowerCaseLetterEl.classList.add("valid");
  } else {
    lowerCaseLetterEl.classList.add("invalid");
    lowerCaseLetterEl.classList.remove("valid");
  }

  const upperCaseLetters = /[A-Z]/g;
  if (inputPswEl.value.match(upperCaseLetters)) {
    upperCaseLetterEl.classList.remove("invalid");
    upperCaseLetterEl.classList.add("valid");
  } else {
    upperCaseLetterEl.classList.add("invalid");
    upperCaseLetterEl.classList.remove("valid");
  }

  const numbers = /[0-9]/g;
  if (inputPswEl.value.match(numbers)) {
    numberEl.classList.remove("invalid");
    numberEl.classList.add("valid");
  } else {
    numberEl.classList.add("invalid");
    numberEl.classList.remove("valid");
  }

  const specialChar = /[@$%&#_\-]/g;
  if (inputPswEl.value.match(specialChar)) {
    specialCharEl.classList.remove("invalid");
    specialCharEl.classList.add("valid");
  } else {
    specialCharEl.classList.add("invalid");
    specialCharEl.classList.remove("valid");
  }

  if (inputPswEl.value.length >= 8 && inputPswEl.value.length <= 16) {
    lenghtEl.classList.remove("invalid");
    lenghtEl.classList.add("valid");
  } else {
    lenghtEl.classList.add("invalid");
    lenghtEl.classList.remove("valid");
  }
});
