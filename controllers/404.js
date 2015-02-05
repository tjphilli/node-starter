var globals = require('../models/globals');


exports.errorPage = function(req, res) {
  	res.render('404', {
	    title: 'Oops | Design Portfolio',
	    url_base: globals.contentUrlbase()
	  });
};