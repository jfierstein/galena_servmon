'use strict';

let router = require('express').Router();

const buildInfo = require('buildInfo');
const config = require('config/env');

const sensors = require('services/sensorsApi');

router.get('/build-info', function (req, res) {
  let info = Object.assign({}, buildInfo);
  info.Environment = config.env;
  res.json(info);
});

router.get('/ping', function (req, res) {
  res.sendStatus(200);
});

router.get('/sensors', function (req, res) {
  let action = sensors.getSensorData();
  res.promise(action);
});

router.get('/usage', function (req, res) {
  let action = sensors.getProcessUsage();
  res.promise(action);
});

module.exports = router;