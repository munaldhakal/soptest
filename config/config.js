

const config = {
    dev: 'development',
    prod: 'production',
    expireTime: 24 * 60 * 10,
    port: process.env.PORT || 3000,
    secrets: {
        
    }
};

process.env.Node_ENV = process.env.Node_ENV || config.dev;
config.env = process.env.Node_ENV;

var envConfig;

try{
    envConfig = require('./' + config.env);
    envConfig = envConfig || {};
} catch(e) {
    envConfig = {};
}

module.exports = {
    envConfig,
    config
};