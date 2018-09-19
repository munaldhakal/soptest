const configuration = require('./config/config');
const config = configuration.config;
//const app = require('./app/app');
const express = require('express');
const server = express();
const debug = require('debug')('app');


var morgan = require ('morgan');
var bodyParser = require('body-parser');
var cors = require('./middleware/cors');





server.use(morgan('dev'));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json);
server.use(cors);




express.Router().post('/asdf', (res, req) => {
    console.log('body: ', req.body);
    console.log('query: ', req.query);
  });
//Connect to Database
require('./database/dbConnection');

//Find Routers
//const app = require('./app/app');
//server.use('/',app.router);
//server.use(app.app);

server.listen(config.port,function(){
    debug(`listening on http://localhost:${config.port}`);
});

