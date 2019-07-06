var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.json({
	  "userId": 1,
	  "id": 1,
	  "title": "delectdawad21234m",
	  "completed": false
	});
});

module.exports = router;
