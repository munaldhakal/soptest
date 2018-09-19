const express = require('express');
const routes = express();
const roomRoute = require('./roomRoute');

routes.get('/:id', (req, res) => {
    res.send('HelloWorld'+req.params.id);
  });
routes.use('/rooms',roomRoute);

module.exports = routes;
