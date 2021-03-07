var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My project page' });
});

router.post('/', function (req, res) {
  console.log(req.body.todoitem);
  filePath = __dirname + '/data.txt';
  fs.writeFile(filePath, 'item:' + req.body.todoitem +'\n', {flag: 'a'}, (err) => { if (err) throw err; });
  res.render('index', { title: 'My project page', todo: req.body.todoitem});
});

module.exports = router;
