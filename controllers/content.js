

exports.about = function(req, res) {
  	res.render('about', {
	    title: 'About'
	 });
};


exports.library = function(req, res) {
  	res.render('the-library', {
	    title: 'The Library'
	 });
};