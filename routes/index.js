var express = require('express');
var router = express.Router();

var route2 = require('./route2');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
