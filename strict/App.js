"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import * as express from 'express';
//import * as express from 'express';
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        var router = express.Router();
        router.get('/', function (req, res) {
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
        this.express.
        ;
    };
    return App;
}());
