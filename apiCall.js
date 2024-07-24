import { url } from "./constant.js";
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
getFoodList();

const ShowFoods = (foods) => {
  console.log(foods, "my foods");

  foods.forEach((item, index) => {
    let { name, description, price, category, __v } = item;

    let tr = document.createElement("tr");
    let tdId = document.createElement("td");
    let tdName = document.createElement("td");
    let tdDescription = document.createElement("td");
    let tdPrice = document.createElement("td");
    let tdCategory = document.createElement("td");
    let td__v = document.createElement("td");

    tdId.textContent = index;
    tdName.textContent = name;
    tdDescription.textContent = description;
    tdPrice.textContent = price;
    tdCategory.textContent = category;
    td__v.textContent = __v;

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdDescription);
    tr.appendChild(tdPrice);
    tr.appendChild(tdCategory);
    tr.appendChild(td__v);
    table.appendChild(tr);
  });
};
