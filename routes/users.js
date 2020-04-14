var passport = require('passport');
var passportIsLoged = require('connect-ensure-login');

var express = require('express');
var router = express.Router();

router.get('/profile', passportIsLoged.ensureLoggedIn('/user/login'), function (req, res) {
  res.render('profile', { user: req.user });
});

module.exports = router;
