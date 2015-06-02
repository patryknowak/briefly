var express = require('express');
var router = express.Router();
var userService = require('../services/user-service.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
 	res.send('respond with a resource');
});

router.get('/create', function(req, res, next) {
	vm = {
		title: 'Create user'
	}
	res.render('users/create', vm);
});

router.post('/create', function(req, res, next) {
	userService.addUser(req.body, function(err){
		if(err){
			vm = {
				title: 'Create user',
				input: req.body,
				error: err
			}
			delete vm.input.password;
			return res.render('users/create', vm);
		}
		res.redirect('/orders');
	});
});

module.exports = router;
