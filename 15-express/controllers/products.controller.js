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

async function getProducts(req, res, next) {
  try {
    console.log("req.user", req.user);

    const filter = {
      seller_id: req.user.id,
    };
    const products = await Product.fetchAll(filter);
    res.json(products);
  } catch (error) {
    next(error);
  }
}

async function getProductDetail(req, res, next) {
  try {
    const result = await Product.findById(req.params.id);
    if (!result) {
      const error = new Error("Product not found");
      error.status = 404;
      return next(error);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
}

async function createProduct(req, res, next) {
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
    next(error);
  }
}

module.exports = {
  getProducts,
  getProductDetail,
  createProduct,
};
