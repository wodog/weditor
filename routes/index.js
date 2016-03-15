var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/save', function(req, res, next) {
	var text = req.query.text || '<h1>请输入</h1>';
	var show_path = path.join(__dirname, '../views/show.jade');
	fs.writeFileSync(show_path, text);
	res.send({
		message: 'ok',
	});
});

router.get('/show', function(req, res, next) {
	res.render('show');
});

module.exports = router;
