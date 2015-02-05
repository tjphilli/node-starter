var globals = require('../models/globals');


exports.index = function(req, res) {
  	res.render('home', {
	    title: globals.siteName(),
	    url_base: globals.contentUrlbase()
	  });
};