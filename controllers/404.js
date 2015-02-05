var globals = require('../models/globals');


exports.errorPage = function(req, res) {
  	res.render('404', {
	    title: 'Oops |' + globals.siteName(),
	    url_base: globals.contentUrlbase()
	  });
};