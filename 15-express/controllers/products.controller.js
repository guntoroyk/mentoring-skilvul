const Product = require("../models/product.model");

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

async function getProducts(req, res) {
  try {
    const products = await Product.fetchAll();
    res.json(products);
  } catch (error) {
    console.log(error);
  }
}

async function getProductDetail(req, res) {
  try {
    const result = await Product.findById(req.params.id);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}

async function createProduct(req, res) {
  console.log("req.body", req.body);

  try {
    const product = new Product(
      req.body.name,
      req.body.desc,
      req.body.price,
      req.body.seller_id
    );

    await product.save();

    res.status(201).json(product);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  getProducts,
  getProductDetail,
  createProduct,
};
