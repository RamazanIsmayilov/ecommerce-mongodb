const express = require("express");
const cors = require("cors");
const path = require("path");
const config = require("./config");
const dbConnect = require("./config/databaze");
const router = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api", router)

dbConnect();

app.listen(config.port, () => {
  console.log(`Application is running on http://localhost:${config.port}`);
});
