let email = document.getElementById("email");
let password = document.getElementById("password");
let login = document.getElementById("login");
let url = "https://food-delivery-backend-fcxs.onrender.com/api";

let userSignIn = async (user) => {
  //   console.log(user, "user login");
  let response = await fetch(`${url}/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  let Data = await response.json();
  if (Data.success) {
    window.open("./home.html");
  } else {
    alert(Data.message);
  }
  console.log(Data, "logged in successfully");
};

login.addEventListener("click", () => {
  let user = {
    email: email.value,
    password: password.value,
  };
  userSignIn(user);
});
