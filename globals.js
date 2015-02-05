
var project_routes = [
					'cdta',
					'bathchat',
					'resumazing',
					'walk-with-me',
					'gutenberg'
					];

var writing_routes = [
					'code-as-craft',
					'designing-for-disparity'
					];

exports.contentUrlbase = function() {
	if(process.env.NODE_ENV === 'production') {
		return "http://d1697b2w85msn7.cloudfront.net/";
	} else {
		return "/";
	}
}

exports.capitalizeify = function(_str) {
	_str = _str.replace(/-/g, ' ');
	var count = 0;
	var arr = [];
	var pos = _str.indexOf(" ");
	while ( pos != -1 ) {
		count++;
		arr.push(pos);
		pos = _str.indexOf( " ",pos + 1 );
	}
	_str = _str[0].toUpperCase() + _str.substr(1, _str.length-1);
	for(var i = 0; i < arr.length; i++) {
		var pos = arr[i]+1;
		console.log(_str.substr(0, pos));
		var _char = _str[pos].toUpperCase();
		_str = _str.substr(0, pos) + _char + _str.substr(pos+1, _str.length-1);
	}
	_str = _str.replace("As", "as");
	return _str;
}

exports.projectRouteExists = function(route) {
	if(project_routes.indexOf(route) == -1 ) {
		return false;
	}
	return true;
}
exports.writingRouteExists = function(route) {
	if(writing_routes.indexOf(route) == -1 ) {
		return false;
	}
	return true;
}