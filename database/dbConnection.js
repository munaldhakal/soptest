const configuration = require('../config/config');
const config = configuration.config;
const envConfig = configuration.envConfig;
const app = require('../app/app');
const debug = require('debug')('app');

const mongoose = require('mongoose').connect(envConfig.db.url, { useNewUrlParser: true})
.then((result) => {
    debug('Successfully Connected to database');
}).catch((err) => {
    debug('Unable to connect to database');
});

mongoose.Promise = global.Promise;

module.exports = mongoose;