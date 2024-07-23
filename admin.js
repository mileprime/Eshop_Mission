let table = document.getElementById("product-table");
let btn_new_product = document.getElementById("new-product");
let url = "https://fakestoreapi.com/products";

let addNewProduct = async () => {
  //prepare the data of the new product
  let newProduct = {
    title: "new product",
    price: 50835,
    description: "test",
    category: "Women",
    image: "https://i.pravatar.cc",
  };
  // do fetch request
  //in the fetch specify the method of the request
  //and the data you want to send
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(newProduct),
  });
  //call the fetch again to bring
  //to get the most updated data
  if (response.status == 200) {
    fetchProductData();
  }

  console.log(response, "res");
};

btn_new_product.addEventListener("click", () => {
  addNewProduct();
});
const showProducts = (products) => {
  console.log(products, "my products");
  //loop through products using forEach

  products.forEach((item) => {
    //item is an object
    //let {title} = item: is destructuring
    let { title, price, category, image, description, id } = item;
    // console.log(title, price, category, image, description, "single item");
    console.log(price);
    //inside the forEach we will create a tr
    let tr = document.createElement("tr");
    //create td
    let tdId = document.createElement("td");
    let tdTitle = document.createElement("td");
    let tdPrice = document.createElement("td");
    let tdDescription = document.createElement("td");
    let tdCategory = document.createElement("td");
    let tdImage = document.createElement("td");
    let img = document.createElement("img");
    //give this td the right content
    tdId.textContent = id;
    tdTitle.textContent = title;
    tdPrice.textContent = price;
    tdDescription.textContent = description;
    tdCategory.textContent = category;
    img.src = image;
    img.style.width = "40px";
    tdImage.appendChild(img);
    //then we will add this td to the tr
    tr.appendChild(tdId);
    tr.appendChild(tdTitle);
    tr.appendChild(tdPrice);
    tr.appendChild(tdDescription);
    tr.appendChild(tdCategory);
    tr.appendChild(tdImage);
    //then we will add the tr to the table
    table.appendChild(tr);
  });
};

const fetchProductData = async () => {
  //user try catch to fetch data
  try {
    //inside ttry will wait the fetch request
    let response = await fetch("https://fakestoreapi.com/products");
    //convert the response to json format
    let data = await response.json();

    //send the data that I get as a response to a function called show products
    showProducts(data);
    //showProducts is function that will print the data in the html
  } catch (error) {
    console.log(error);
  }
};
fetchProductData();
