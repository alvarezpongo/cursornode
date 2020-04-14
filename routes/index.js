var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', user: req.user });
});


router.get('/joaco', function (req, res, next) {
  res.send('respond with a joaco');
})
module.exports = router;
