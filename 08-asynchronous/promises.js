// Synchronous
// Program js defaultnya dijalankan secara synchronous => baris per baris
// call stack

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

// function getProductsAync(cb) {
//   const products = [];

//   setTimeout(() => {
//     console.log("getting products...");
//     cb(products);
//   }, 2000);
// }

function getProductsAync() {
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
    let isSuccess = true;

    setTimeout(() => {
      if (isSuccess) {
        resolve("user");
      } else {
        reject(new Error("error getting user"));
      }
    }, 2000);
  });
}

getProductsAync()
  .then((products) => {
    console.log("products", products);

    return getUserDetailAsync();
  })
  .then((user) => {
    console.log("user", user);
  })
  .then()
  .then()
  .then()
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("get product selesai");
  });

renderHTML();
