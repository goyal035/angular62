var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('api user index');
  res.send('api user index');
});

router.get('/add', function(req, res, next) {
  console.log('api user add',req.path);
  res.send('api user add');
});

module.exports = router;
