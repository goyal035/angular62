var express = require('express');
var router = express.Router();

var user_controller = require('./users');

router.use((req, res, next) => {
    var allowedMethod = [ '/signup','/login','/users/add' ];
    Common.setLanguage(req.headers['accept-language']);
    
    if(_.indexOf(allowedMethod,req.path) >= 0){
    	next();
    }else{
    	res.send('Invalid request');
    }
    
});
/* GET home page. */
router.use('/users', user_controller);


router.all('/signup',upload.single('file'),function(req, res, next) {
	var uData = req.body;

	if(uData.lat && uData.lng){
		var loc = { coordinates: [ parseInt(uData.lng),parseInt(uData.lat) ] }
		uData['location'] = loc;
	}
	

	//uData = JSON.parse(uData);
	//console.log(uData);


	/*var u = new Users({ 
		fname: 'ganpat',lname:'goyal',role:'admin',email:'goyal.ganpat@gmail.com',
		location: {
	   		type: "Point",
	   		coordinates: [-112.110492, 36.098948]
		} 
	});*/
	var u  = new Users(uData);
	u.save(function (err, uRecord) {
	    if (err){
	    	var optionalData = { customMsg:Common.handleErrorResponse(err)}	    	
	    	return Common.createResponseObj(res,6000,403,[],optionalData);	    	
	    }

	    /*if(req.file.path){
	    	Common.renameFile(req.file.path,path.join(__dirname, 'public','images','users','abc.jpg'));
	    }*/
		return Common.createResponseObj(res,102,200,[{data:uRecord}]);
	    
	    /*var ut = new UserTokens({ u_id : data.id });
		ut.save(function (err, utRecord) {
		    if (err){
		    	var optionalData = { customMsg:Common.handleErrorResponse(err)}	    	
		    	return Common.createResponseObj(res,6000,403,[],optionalData);	    	
		    }		    
		});*/
	});
	//console.log('all',req.body, req.file.path);
	//Common.renameFile(req.file.path,path.join(basePath,'images','test.jpg'));
});

router.all('/login', function(req, res, next) {
	console.log('all',req.path);
	res.render('index', { title: 'Express'});
});

router.all('/', function(req, res, next) {
	console.log('all',req.path);
	res.render('index', { title: 'Express'});
});

module.exports = router;
