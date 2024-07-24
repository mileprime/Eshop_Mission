let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signUpBtn = document.getElementById("signup");

signUpBtn.addEventListener("click", () => {
  let newUser = {
    name: username.value,
    email: email.value,
    password: password.value,
  };
  console.log(newUser, "new User");
  return newUser;
});
