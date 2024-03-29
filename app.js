'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const app = new express();

// register JSON parser middlewear
app.use(bodyParser.json());

require('./routes/personRoutes')(app);
require('./routes/versionRoutes')(app, config);

app.listen(8080, () => {
    /* eslint-disable */
    console.log('Server is up!');
});

