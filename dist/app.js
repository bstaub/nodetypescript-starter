"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import * as express from "express";
//const express = require('express');
var express_1 = __importDefault(require("express"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        var router = express_1.default.Router();
        router.get('/', function (req, res) {
            res.json({
                message: 'Hello World!'
            });
        });
        this.app.use('/', router);
        router.get('/mydata', function (req, res) {
            res.json({
                name: 'Bruno Staub',
                area: 'Luzern',
                zip: 6005
            });
        });
        this.app.use('/bruno', router);
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=App.js.map