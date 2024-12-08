const express = require("express");
const cors = require("cors");
const path = require("path");
const config = require("./config");
const dbConnect = require("./config/databaze");
const router = require("./routes");
const errorMiddleware = require("./middlewares/error.middleware");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")))

app.use("/api", router)

dbConnect();

app.use(errorMiddleware)

app.listen(config.port, () => {
  console.log(`Application is running on http://localhost:${config.port}`);
});
