const express = require('express');
const morgan = require('morgan');

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
    return app;
}

module.exports = buildApp;