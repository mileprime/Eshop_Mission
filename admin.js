const showProducts = (products) => {
  console.log(products, "my products");
  //loop through products using forEach

  products.forEach((item) => {
    //item is an object
    //let {title} = item: is destructuring
    let { title, price, category, image, description } = item;
    console.log(title, price, category, image, description, "single item");
  });
  //inside the forEach we will create
  //create td
  //give this td the right content
  //then we will add this td to the tr
  //then we will add the tr to the table
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
