const routes = require('express').Router();


routes.get('/', (req, res) => {
  res.status(200).json({ message: 'You are Connected!' });
});

router.get("/:color-name", route2Callback) => {
  res.render('route2');
}

module.exports = routes;
