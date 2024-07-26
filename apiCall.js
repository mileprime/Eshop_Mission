import { url } from "./constant.js";
export let main_url = "https://food-delivery-backend-fcxs.onrender.com";
let FormFood = document.getElementById("foodForm");

let table = document.getElementById("food-table");
let btn_new_food = document.getElementById("new-food");

let getFoodList = async () => {
  let token = localStorage.getItem("token");
  let response = await fetch(`${url}/food/list`, {
    headers: { Authorization: token },
    method: "GET",
  });
  let Data = await response.json();
  ShowFoods(Data.data);
  console.log(Data.data, "response");
};
if (table) {
  getFoodList();
}

let deleteFood = async (itemid) => {
  try {
    let itemId = { id: itemid };
    // do the fetch for request
    let response = await fetch(`${url}/food/remove`, {
      method: "DELETE",
      body: JSON.stringify(itemId),
    });
    let data = await response.json();
    if (data.success) {
      getFoodList();
      alert(data.message);
    } else {
      alert(data.message);
    }
    console.log(data);
    //specify the method which is delete
    //send the id of the item which we need to delete
  } catch (error) {
    alert("Delete is definitely not working");
  }
};
// let tBody = table.querySelector("tbody");

const ShowFoods = (foods) => {
  console.log(foods, "my foods");

  let thead = ` <tr>
  <th>ID</th>
  <th>Title</th>
  <th>Name</th>
  <th>Description</th>
  <th>Price</th>
  <th>Category</th>
  <th>Image</th>
  <th>Actions</th>
</tr>`;

  table.innerHTML = "";
  table.innerHTML = thead;

  foods.forEach((item, index) => {
    let { title, name, description, price, category, image, _id } = item;

    let tr = document.createElement("tr");
    let tdId = document.createElement("td");
    let tdTitle = document.createElement("td");
    let tdName = document.createElement("td");
    let tdDescription = document.createElement("td");
    let tdPrice = document.createElement("td");
    let tdCategory = document.createElement("td");
    let tdImage = document.createElement("td");
    let img = document.createElement("img");
    let tdAction = document.createElement("td");
    let removeBtn = document.createElement("button");

    tdId.textContent = index + 1;
    tdTitle.textContent = title;
    tdName.textContent = name;
    tdDescription.textContent = description;
    tdPrice.textContent = price;
    tdCategory.textContent = category;
    img.src = `${main_url}/images/${image}`;
    img.style.width = "40px";
    tdAction.appendChild(removeBtn);
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", () => {
      deleteFood(_id);
    });

    tr.appendChild(tdId);
    tr.appendChild(tdTitle);
    tr.appendChild(tdName);
    tr.appendChild(tdDescription);
    tr.appendChild(tdPrice);
    tr.appendChild(tdCategory);
    tdImage.appendChild(img);
    tr.appendChild(tdImage);
    tr.appendChild(tdAction);
    table.appendChild(tr);
  });
};

let name = document.getElementById("name");
let description = document.getElementById("description");
let price = document.getElementById("price");
let category = document.getElementById("category");
let image = document.getElementById("image");
if (FormFood) {
  FormFood.addEventListener("click", async () => {
    //we will convert the data to formData
    let foodFormData = new FormData();
    foodFormData.append("name", name.value);
    foodFormData.append("price", price.value);
    foodFormData.append("description", description.value);
    foodFormData.append("category", category.value);
    foodFormData.append("image", image.files[0]);
    //Then we will do the fetch request

    let response = await fetch(`${url}/food/add`, {
      method: "POST",
      body: foodFormData,
    });

    let data = await response.json();
    console.log(data, "done adding food");
    //Specify the method as POST
    //Send the data that we have converted to formData
  });
}
