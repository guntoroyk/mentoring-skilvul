const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "Product 1 description",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    description: "Product 2 description",
  },
];

function getProducts(req, res) {
  res.json(products);
}

function getProductDetail(req, res) {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    res.status(404).send("Product not found");
  } else {
    res.json(product);
  }
}

function createProduct(req, res) {
  console.log("req.body", req.body);

  const product = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  };
  products.push(product);
  res.status(201).json(product);
}

module.exports = {
  getProducts,
  getProductDetail,
  createProduct,
};
