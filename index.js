const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const routes = require("./routes ");
const pino = require("express-pino-logger")();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(pino);

app.use("/api", routes);

app.listen(port, (err) => {
  if (err) {
    throw err;
  }

  console.log("Super ça marche");
});
