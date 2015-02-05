var globals = require('../globals.js');

exports.writing = function(req, res) {
	if(!globals.writingRouteExists(req.params.writing)) {
		res.send('<h1>Oops!</h1>')
	}
	else {
		var writing_name = req.params.writing,
			writing_title = globals.capitalizeify(writing_name);
	  	res.render('writing/'+writing_name, {
		    title: writing_title,
		    view_base: '../',
		    url_base: globals.contentUrlbase()
		 });
	  }
};