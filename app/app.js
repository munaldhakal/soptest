const express = require('express');
const app = express();
const router = express.Router();

//Middleware setup
//const middleware = require('../middleware/middleware');
//app.use(middleware);
//Use Routes
const routes = require('../routes/routes');
router.use('/',routes);

module.exports = {
  router,app
};