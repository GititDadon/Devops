var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('register', {
    layout: true,
    page: 'register'
  });
});

/* GET home page. */
router.get('/:pageName', function (req, res, next) {

  res.render(req.url.substring(1), {
    layout: true,
    page: req.url.substring(1)
  });
});

module.exports = router;