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

function getProductsAsync(cb) {
  const products = [];

  setTimeout(() => {
    console.log("getting products...");
    cb(products);
  }, 2000);
}

function getProductsSync(cb) {
  const products = [];

  console.log("getting products...");
  cb(products);
}

function asyncFunc1(cb) {}

function asyncFunc2(cb) {}

function getUserDetailAsync(cb) {}

getProductsAsync((products) => {
  console.log("products", products);
  getUserDetailAsync((user) => {
    console.log("user", user);
    asyncFunc1((res1) => {
      console.log("res1", res1);
      asyncFunc1((res2) => {
        console.log("res2", res2);
        asyncFunc1((res2) => {
          console.log("res2", res2);
          asyncFunc1((res2) => {
            console.log("res2", res2);
            asyncFunc1((res2) => {
              console.log("res2", res2);
            });
          });
        });
      });
    });
  });
});

renderHTML();
