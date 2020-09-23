const express = require('express');
const route = express.Router();

const songsController = require('./../controllers/songs.controller');

route.get("/",songsController.findAll);
route.get("/:albumId",songsController.findById);

module.exports = route;