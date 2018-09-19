const configuration = require('./config/config');
const config = configuration.config;
const express = require('express');
const server = express();
const morgan = require ('morgan');
const bodyParser = require('body-parser');
const cors = require('./middleware/cors');
const debug = require('debug')('server');

require('./database/dbConnection');

server.use(morgan('dev'));
server.use(bodyParser.json);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors);

const roomRoute = require('./routes/roomRoute');
server.use('/rooms',roomRoute);

server.get('/', (req, res) => {
    res.send('HelloWorld');
  });

server.listen(config.port,function(){
    debug(`listening on http://localhost:${config.port}`);
});