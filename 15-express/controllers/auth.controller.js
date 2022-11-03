var jwt = require("jsonwebtoken");

function generateJWTToken(req, res, next) {
  const token = jwt.sign({ id: "2", name: "Budi" }, "secret", {
    expiresIn: "1h",
  });

  res.json({ token });
}

module.exports = {
  generateJWTToken,
};
