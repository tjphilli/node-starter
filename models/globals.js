exports.siteName = function () {
	return "Node Starter";
}

exports.contentUrlbase = function() {
	if(process.env.NODE_ENV === 'production') {
		// put cdn URL here
		return "";
	} else {
		return "/";
	}
}
