var express = require('express');
var router = express.Router();


/* home page. */
router.get('/', function(req, res, next) {
  res.render('route1', { title: 'Route 1' });
});

module.exports = router;
