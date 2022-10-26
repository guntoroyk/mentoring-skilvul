const express = require("express");
const productController = require("../controllers/products.controller");

const productRouter = express.Router();

productRouter.get("/", productController.getProducts);

productRouter.get("/:id", productController.getProductDetail);

productRouter.post("/", productController.createProduct);

module.exports = productRouter;
