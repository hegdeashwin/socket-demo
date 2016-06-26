'use strict';

/**
 * Requires a in-built utility functions;
 */
import path from 'path';

/**
 * Requires a 3rd party utility functions;
 */
import express from 'express';
import bodyParser from 'body-parser';

/**
 * Requires a constants utility functions;
 */
import STACK_CONFIG from './stack.conf';

/**
 * Create an express app;
 */
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

/**
 * Application configurations for production environment.
 */
app.set('port', process.env.PORT || STACK_CONFIG.server.dist.port);
app.set('uri', STACK_CONFIG.server.dist.ip);
app.use(express.static(path.join(__dirname, STACK_CONFIG.server.dist.codebase)));

module.exports = app;
