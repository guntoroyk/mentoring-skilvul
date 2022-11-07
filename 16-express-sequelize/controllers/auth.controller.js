var jwt = require("jsonwebtoken");

function generateJWTToken(req, res, next) {
  const token = jwt.sign({ id: "2", name: "Budi" }, "secret", {
    expiresIn: "24d",
  });

  res.json({ token });
}

module.exports = {
  generateJWTToken,
};
