const express = require("express");
const router = require("./routes");
const { errorHandler } = require("./middlewares/error-handler");

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
