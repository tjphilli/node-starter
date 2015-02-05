

exports.contentUrlbase = function() {
	if(process.env.NODE_ENV === 'production') {
		return "http://d1697b2w85msn7.cloudfront.net/";
	} else {
		return "/";
	}
}
