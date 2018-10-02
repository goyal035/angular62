var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	/*var u = new Users({ fname: 'ganpat',lname:'goyal',role:'admin',email:'goyal.ganpat@gmail.com',location: {
			   type: "Point",
			   coordinates: [-112.110492, 36.098948]
			} });
	u.save(function (err, data) {
	    if (err) return console.log(err);
	    console.log(data);
	    var ut = new UserTokens({ u_id : data.id });
		ut.save(function (err, data1) {
		    if (err) return console.log(err);
		    console.log(data1);
		});
	});*/

	UserTokens.findOne({}).populate('u_id').exec(function(err, data) {
	    if (err) return console.log(err);
		console.log(data);		
	});

	/*Users.updateOne(
		{ role: 'admin' },
		{ 
			email: 'goyal.ganpat@gmail.com',  
			location: {
			   type: "Point",
			   coordinates: [-112.110492, 36.098948]
			},
		}, 
		function(err, res) {
		  	if (err) return console.log(err);
		    console.log(res);
		}
	);*/
	

  	res.render('index', { title: 'Express'});
});

module.exports = router;
