var globals = require('../models/globals');


exports.index = function(req, res) {
  	res.render('home', {
	    title: 'Design Portfolio',
	    url_base: globals.contentUrlbase()
	  });
};