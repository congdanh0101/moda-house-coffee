//import
const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");
// require('dotenv').config()
const db = require("./config/database");
const morgan = require("morgan");
const route = require("./route/index.route");

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST;

db.connectDB();
// app.use(morgan('combined'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
    helpers: {
      formatCurrency(x) {
        return new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(x);
      },
    },
  })
);
app.set("views", path.join(__dirname, "resources/views"));
app.set("view engine", "hbs");

route(app);

app.listen(port, host, () =>
  console.log(`Server is running at http://${host}:${port}`)
);
