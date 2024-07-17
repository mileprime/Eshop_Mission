let cartIcon = document.getElementById("cart_id");
let overlay = document.querySelector(".overlay");

let card_container = document.getElementById("items");

cartIcon.addEventListener("click", () => {
  overlay.style.display = "block";
});

let apiCall = () => {
  let promise = new Promise((resolve, reject) => {
    let data = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => res);
    if (data) {
      resolve(data);
    } else {
      reject();
    }
  });
  return promise;
};

window.onload = () => {
  apiCall()
    .then((data) => {
      //data is an array of 20 objects(products)
      //in order to loop through the array we need for each
      //so I can
      data.forEach((product) => {});
    })
    .catch(() => alert("We are working on it!!"));
};
