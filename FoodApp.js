let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signUpBtn = document.getElementById("signup");
let url = "https://food-delivery-backend-fcxs.onrender.com/api";

let userSignUp = async (user) => {
  //Do fetch for user register url
  //with the url specify the method name
  //with the url specify the headers needed
  //Finally send the body: which is the new user object
  let response = await fetch(`${url}/user/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  //Convert the response to json
  let Data = await response.json();
  if (Data.success) {
    window.open("./SignIn.html");
  } else {
    alert(Data.message);
  }
  console.log(Data, "Done!");

  // let response = fetch(`${url}/user/register`,{
  //     method: "POST",
  //     headers: {
  //         Accept: "application/json",
  //         "User-Agent": "learning app"
  //     },

  // });
};

signUpBtn.addEventListener("click", () => {
  let newUser = {
    name: username.value,
    email: email.value,
    password: password.value,
  };
  userSignUp(newUser);
});
