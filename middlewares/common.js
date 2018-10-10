var method = Common.prototype;

function Common(age) {
    this._age = age;
}

method.getCommenProperty = function() {
    return this._age;
};

method.getTimezoneOffset = function() {
    return new Date().getTimezoneOffset();
};

method.setLanguage = function(lang) {
	if(lang){
		locale.setLocale(lang);
	}	
};

method.getTimezoneString = function() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

method.renameFile = function(srcPath, destPath){
	fs.rename(srcPath, destPath, (err) => {
	  	if (err) return false;
	  	console.log('Rename complete!');
	  	return true;
	});
};

method.getResponseMsg = function(code,optionalData){
	var msg = 'Invalid request';
	var msgObj = {
		101 : locale.__('Hello'),
		102 : locale.__('Hello %s, how are you today?','ganpat'),
		103 : locale.__('Signup success');
	}

	if(msgObj[code] != undefined){
		msg = msgObj[code];
	}
	return msg;
};

method.createResponseObj = function(res,code, httpCode, data, optionalData){
	if(optionalData !== undefined && optionalData.hasOwnProperty("customMsg")){
		var msg = optionalData.customMsg;
	}else{
		var msg = this.getResponseMsg(code);		
	}
	var resObj = {};
	
	for(k in data){
		resObj[Object.keys(data[k])] = data[k][Object.keys(data[k])];		
	}
	resObj['msg'] = msg;
	resObj['code'] = code;
	res.status(httpCode);
	res.json(resObj);
	return res;	
};

method.handleErrorResponse = function(error){
	var errMsg;
	if (error.name == 'ValidationError') {
        //console.log('Error Validating!', error.errors);
        for(k in error.errors){
        	return errMsg = locale.__(error.errors[k]['message']);        	
        }
        
    } else if(error.name == 'MongoError') {
    	var dbErrMsg = error.errmsg;
		console.log(dbErrMsg);
		var fieldName = dbErrMsg.substring(dbErrMsg.indexOf('$')+1,dbErrMsg.indexOf('_'));
		switch(error.code){
    		case 11000 : errMsg = 'field is duplicate'.replace('field',fieldName); break;
    		default : errMsg = 'Some error occurred';
    	}    	
        errMsg = locale.__(errMsg);
        return errMsg;
    }


};

module.exports = Common;