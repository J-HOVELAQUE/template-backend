const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');

const router = require('./routers');

function buildApp(dependencies) {
    const app = express();

    // Middlewares
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use((req, res, next) => {
        req.dependencies = dependencies;
        next();
    })

    // Routers
    app.use('/', router);

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        next(createError(404));
    });

    return app;
}

module.exports = buildApp;