function createProductValidator(req, res, next) {
  const { name, price, seller_id } = req.body;
  if (!name || !price || !seller_id) {
    return res
      .status(400)
      .json({ message: "Name, price, and seller_id are required" });
  }
  next();
}

module.exports = {
  createProductValidator,
};
