let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signUpBtn = document.getElementById("signup");
let url = "https://food-delivery-backend-fcxs.onrender.com/api";

let userSignUp = (user) => {
  console.log(user, "new user");
};

signUpBtn.addEventListener("click", () => {
  let newUser = {
    name: username.value,
    email: email.value,
    password: password.value,
  };
  userSignUp(newUser);
});
