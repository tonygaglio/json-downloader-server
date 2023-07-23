const express = require('express');
const { controller } = require('../../controller');

const router = express.Router();

router.route('/').get((req, res) =>
  res.send({
    status: 'online',
    version: '1',
  })
);

router.route('/download').post(controller.handleDownloadFile);

module.exports = router;
