let card_container = document.getElementById("items");

import { addItemToCart } from "./e-shop.js";

export let createCartItem = (product) => {
  let card = document.createElement("div");
  card.classList = "card";
  //create the image cart
  let img_container = document.createElement("div");
  let product_img = document.createElement("img");
  product_img.id = "img";

  // let image from product
  let { image, title, price } = product;

  product_img.src = image;
  img_container.appendChild(product_img);
  card.appendChild(img_container);
  //create button and add it to the card
  let btn_container = document.createElement("div");
  let addBtn = document.createElement("button");
  addBtn.textContent = "Add to the cart";
  addBtn.addEventListener("click", () => {
    addItemToCart(product);
  });

  //create elemennts to show the product title and price
  let card_name = document.createElement("div");
  let title_p = document.createElement("p");
  let price_p = document.createElement("p");
  card_name.classList = "card-name";
  card_name.appendChild(title_p);
  card_name.appendChild(price_p);
  title_p.textContent = title;
  price_p.textContent = "$" + price;
  card.appendChild(card_name);

  console.log(product.rating.rate, product.title, product.price);
  // console.log(product);

  //create star images dynamic
  let star_container = document.createElement("div");
  star_container.classList = "stars-icon";
  card.appendChild(star_container);

  for (let i = 0; i < product.rating.rate; i++) {
    // console.log(i);
    let starImg = document.createElement("img");
    starImg.src = "./images/star.png";
    star_container.appendChild(starImg);
  }

  //create star images fixed
  // let star_container = document.createElement("div");
  // let star1 = document.createElement("img");
  // let star2 = document.createElement("img");
  // let star3 = document.createElement("img");
  // let star4 = document.createElement("img");
  // let star5 = document.createElement("img");
  // star_container.classList = "stars-icon";
  // star1.src = "./images/star.png";
  // star2.src = "./images/star.png";
  // star3.src = "./images/star.png";
  // star4.src = "./images/star.png";
  // star5.src = "./images/star.png";
  // star_container.appendChild(star1);
  // star_container.appendChild(star2);
  // star_container.appendChild(star3);
  // star_container.appendChild(star4);
  // star_container.appendChild(star5);
  // card.appendChild(star_container);

  btn_container.appendChild(addBtn);
  card.appendChild(btn_container);

  card_container.appendChild(card);
  // console.log(product);
};
