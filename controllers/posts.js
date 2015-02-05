var posts = require('../models/posts');
var marked = require('marked');
var globals = require('../models/globals');


exports.post = function(req, res) {
	var post_content = "";
	fs.readFile("views/posts/"+posts.getProject(req.params.post).post_file, 'utf8', function(err,data){
		post_content = marked(data);
	  	res.render('posts', {
	  		post: posts.getProject(req.params.post),
	  		html: post_content,
	  		url_base: globals.contentUrlbase()
	  	});
	});
};
