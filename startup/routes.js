const express = require('express');
const bodyparser = require('body-parser');
const accountdata = require('../routes/accountdata');
const error = require('../middleware/error');


module.exports = function(app){

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended:false }));
    app.use('/api/data',accountdata);
    app.use(error);
}

// module.exports = routing;

