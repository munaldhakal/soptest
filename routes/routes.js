const roomRoute = require('./roomRoute');

module.exports = (app) =>{
    app.use('/rooms',roomRoute);
};
