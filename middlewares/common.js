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
		102 : locale.__('Hello %s, how are you today?','ganpat')
	}

	if(msgObj[code] != undefined){
		msg = msgObj[code];
	}
	return msg;
};

method.createResponseObj = function(res,code, httpCode, data, optionalData){
	var msg = this.getResponseMsg(code);
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

module.exports = Common;