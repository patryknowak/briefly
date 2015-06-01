var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/create', function(req, res, next) {
  vm = {
  	title: 'Create user'
  }
  res.send('users/create', vm);
});

module.exports = router;
