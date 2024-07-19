//make the array to a string, to save it in local storage
export let SaveCartInLocalStorage = (cart) => {
  let cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);
};
