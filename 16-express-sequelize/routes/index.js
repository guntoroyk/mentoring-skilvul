const express = require("express");
const productRouter = require("./products.route");
const authController = require("../controllers/auth.controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/token", authController.generateJWTToken);
router.use("/products", productRouter);

module.exports = router;
