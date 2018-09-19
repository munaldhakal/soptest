const roomRoute = require('./roomRoute');

module.exports = (app) =>{
    console.log("inside ROUTER");
    app.use('/rooms',roomRoute);
};