//import * as express from "express";
//const express = require('express');
import express from 'express';



class App {
  //public express
  public app: express.Application;

  constructor () {
    this.app = express();
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.app.use('/', router)

    router.get('/mydata', (req, res) =>{
      res.json({
        name: 'Bruno Staub',
        area: 'Luzern',
        zip: 6005
      });
    })
    this.app.use('/bruno', router)
  }
}

export default new App().app;