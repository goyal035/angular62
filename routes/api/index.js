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
	//console.log('all',req.body, req.file.path);
	//Common.renameFile(req.file.path,path.join(basePath,'images','test.jpg'));
	return Common.createResponseObj(res,102,200,[{data:'fff'}]);	
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
