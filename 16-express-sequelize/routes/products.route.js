const express = require("express");
const productController = require("../controllers/products.controller");
const productValidator = require("../middlewares/products-validator");
const authMiddleware = require("../middlewares/authentication");

const productRouter = express.Router();

productRouter.get(
  "/",
  authMiddleware.authenticate,
  productController.getProducts
);

productRouter.get("/:id", productController.getProductDetail);

productRouter.post(
  "/",
  productValidator.createProductValidator,
  productController.createProduct
);

module.exports = productRouter;
