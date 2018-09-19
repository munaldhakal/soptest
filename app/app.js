const express = require('express');
const app = express();

//middleware setup
require('../middleware/middleware')(app);
//route setup
app.get('/', (req, res) => {
    res.send('HelloWorld');
  });
require('../routes/routes')(app);
module.exports = app;