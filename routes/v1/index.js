const express = require('express');
const baseRoute = require('./base.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: baseRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
