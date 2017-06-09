'use strict';

require('app-module-path').addPath(__dirname);

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const Ddos = require('ddos')
const ddos = new Ddos;
const express = require('express');
const errorHandler = require('lib/express/errorHandler');
const client = require('lib/helpers/client');
const logger = require('lib/helpers/logger');
const config = require('config/env');

const app = express();
const port = config.port;

app.set('view engine', 'ejs');
app.set('trust proxy');

app.use(ddos.express);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(errorHandler);
app.use(cookieParser());
app.use(express.static(client.path));
app.use('/api', require('routes/api'));
app.use(require('routes/static'));

const initialActions = [];

Promise.all(initialActions).then(results => {
    app.listen(port);
    logger.info('App running on port ' + port);
}).catch(err => {
    logger.warn( 'Failed to start app: ' + err);
  });