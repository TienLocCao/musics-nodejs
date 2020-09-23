const express = require('express');
const route= express.Router();

const albumsController = require('./../controllers/albums.controller.js');


route.get("/",albumsController.findAll);

module.exports = route;
