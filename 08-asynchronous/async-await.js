const { mainModule } = require("process");

function a() {
  console.log("a");
}

function b() {
  console.log("b");
  a();
}

function renderHTML() {
  console.log("c");
  b();
}

function getProductsAsync() {
  return new Promise((resolve, reject) => {
    const products = [
      {
        id: 1,
        name: "product 1",
      },
      {
        id: 2,
        name: "product 2",
      },
    ];

    let isSuccess = true;

    setTimeout(() => {
      if (isSuccess) {
        resolve(products);
      } else {
        reject(new Error("error getting products"));
      }
    }, 2000);
  });
}

function getUserDetailAsync() {
  return new Promise((resolve, reject) => {
    let isSuccess = false;

    setTimeout(() => {
      if (isSuccess) {
        resolve("user");
      } else {
        reject(new Error("error getting user"));
      }
    }, 2000);
  });
}

async function main() {
  try {
    const products = await getProductsAsync();
    console.log("products", products);

    const user = await getUserDetailAsync();

    console.log("user", user);
  } catch (error) {
    console.log("error", error);
  }
}

main();

renderHTML();
