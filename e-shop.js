let cart = [];

let cartIcon = document.getElementById("cart_id");
let overlay = document.querySelector(".overlay");
let modal_content = document.querySelector(".modal-content");

let card_container = document.getElementById("items");

cartIcon.addEventListener("click", () => {
  overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});
modal_content.addEventListener("click", () => {
  e.stopPropagation();
});
let apiCall = () => {
  let promise = new Promise((resolve, reject) => {
    let data = fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );

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
      data.forEach((product) => {
        let card = document.createElement("div");
        card.classList = "card";
        //create the image cart
        let img_container = document.createElement("div");
        let product_img = document.createElement("img");
        product_img.id = "img";
        product_img.src = product.image;
        img_container.appendChild(product_img);
        card.appendChild(img_container);
        //create button and add it to the card
        let btn_container = document.createElement("div");
        let addBtn = document.createElement("button");
        addBtn.textContent = "Add to the cart";
        addBtn.addEventListener("click", () => {
          cart.push(product);
          console.log(product);
        });

        btn_container.appendChild(addBtn);
        card.appendChild(btn_container);

        card_container.appendChild(card);
        // console.log(product);
      });
    })
    .catch(() => alert("We are working on it!!"));
};
