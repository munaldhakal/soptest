const configuration = require('./config/config');
const config = configuration.config;
const app = require('./app/app');
const debug = require('debug')('app');

require('./database/dbConnection');

app.listen(config.port,function(){
    debug(`listening on http://localhost:${config.port}`);
});

