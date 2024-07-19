import { apiCall } from "./apiCalls.js";
import { createCartItem } from "./displayFunctions.js";
import { SaveCartInLocalStorage } from "./utilizeFunction.js";

let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

// console.log(3 > 2 ? "3 is larger" : "3 is not");

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
modal_content.addEventListener("click", (e) => {
  e.stopPropagation();
});

//function that shows items inside the cart

let showCartItems = () => {
  modal_content.innerHTML = "";
  cart.forEach((item) => {
    let { image, title, price } = item;

    let cartItem = document.createElement("div");
    let cart_img_container = document.createElement("div");
    let cart_img = document.createElement("img");
    let deleteBtn = document.createElement("button");
    cartItem.classList = "cart-item";
    cart_img.id = "cart-item-img";
    cart_img_container.classList = "cart-item-img-container ";
    cart_img.src = image;
    deleteBtn.textContent = "X";
    cart_img_container.appendChild(cart_img);
    cartItem.appendChild(cart_img_container);
    cartItem.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      //filter the item you want to delete
      cart = cart.filter((cartItem) => cartItem.id != item.id);

      //save in local storage
      SaveCartInLocalStorage(cart);
      //update the html of showing the cart item
      showCartItems();
    });
    modal_content.appendChild(cartItem);
  });
};

export let addItemToCart = (product) => {
  let isItemInCart = cart.find((item) => {
    return product.id == item.id;
  });
  if (!isItemInCart) {
    cart.push({ ...product, item_quantity: 1 });
    SaveCartInLocalStorage(cart);

    showCartItems();
  } else {
    cart.map((item) => {
      if (item.id == product.id) {
        return { ...item, item_quantity: item.item_quantity++ };
      } else {
        return item;
      }
    });
    showCartItems();
    SaveCartInLocalStorage(cart);
  }

  console.log(cart, "its already in the cart");
};

window.onload = () => {
  apiCall()
    .then((data) => {
      //data is an array of 20 objects(products)
      //in order to loop through the array we need for each
      //so I can have access to each and every element
      //data is the array and product is an object
      data.forEach((product) => {
        createCartItem(product);
      });
    })
    .catch(() => alert("We are working on it!!"));
};
