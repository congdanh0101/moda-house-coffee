const drinkRouter = require("./drink.route");
const categoryRouter = require("./category.route");
const homeRouter = require('./home.route')

function route(app) {
  app.use("/drink", drinkRouter);
  app.use("/category", categoryRouter);
  app.use('/',homeRouter)
}

module.exports = route;
