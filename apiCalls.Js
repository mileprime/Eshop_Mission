export let apiCall = () => {
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
