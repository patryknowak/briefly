var express = require('express');
var orders = express.Router();

/* GET home page. */
orders.get('/', function(req, res, next) {
  res.render('orders/index', { title: 'Place an order' });
});

module.exports = orders;
