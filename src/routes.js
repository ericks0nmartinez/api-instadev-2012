const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => res.send('versão do sistema: 0.1.0'));
module.exports = routes;
