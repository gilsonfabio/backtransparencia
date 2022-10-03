const express = require('express');
const routes = express.Router();

const UsersController = require('./controllers/UsersController');
const SecretariasController = require('./controllers/SecretariasController');
const DownloadsController = require('./controllers/DownloadsController');

routes.get('/signIn/:email/:password', UsersController.signIn);

routes.get('/secretarias', SecretariasController.index);
routes.get('/searchSec/:id', SecretariasController.searchSec);

routes.get('/downloadTxt', DownloadsController.downTexto);

module.exports = routes;
