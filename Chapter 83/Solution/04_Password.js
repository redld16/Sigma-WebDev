// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  let password = input.value;
  if (checkPassword(password)) {
    alert("Password is valid");
  } else {
    alert("Password is not valid");
  }
});

function checkPassword(password) {
  return (
    password.length >= 8 &&
    password.match(/[a-z]/) &&
    password.match(/[A-Z]/) &&
    password.match(/[0-9]/)
  );
}
