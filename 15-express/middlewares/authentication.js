const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    const error = new Error("Access token is required");
    error.status = 401;
    return next(error);
  }

  try {
    const payload = jwt.verify(token, "secret");
    req.user = payload;
    next();
  } catch (error) {
    error.status = 401;
    next(error);
  }
}

module.exports = {
  authenticate,
};
