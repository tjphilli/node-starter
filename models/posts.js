var marked = require('marked');
var fs = require('fs');


// "project":{
// 	post_route: "test",
// 	post_title: "Test Project Post!!!!",
// 	post_teaser: "Before they sold out 3 wolf moon dreamcatcher, whatever flexitarian seitan salvia Helvetica tattooed.",
// 	post_file: "test.md",
// 	post_image: "http://placehold.it/1000x300"
// }

var Project = function(title, teaser, options) {
	this.post_title = title;
	var slug = title.toLowerCase().replace(/\s/g, "-");
	console.log(slug)
	this.id = slug;
	this.post_route = slug;
	this.post_teaser = teaser;


	this.post_image = "images/" + slug +"-intro-image.png";
	this.post_file = slug +"-post.md";
	if(options) {
		this.post_image_bake = options.image_bake;
		if (options.is_jpg) {
			this.post_image = "images/" + slug +"-intro-image.jpg";
		}
	}
}

var posts = {
	projects: [
		new Project(
			"Project 1",
			"Sriracha selfies YOLO, brunch put a bird on it Bushwick lo-fi ugh Schlitz bespoke before they sold out High Life."
		)
		,new Project(
			"Project 2",
			"Put a bird on it before they sold out listicle Blue Bottle pop-up cray.",
			{is_jpg: true}
		)
	],
	// searching function for posts
	getProject: function(id) {
		var post;
		for (var i =0; i < this.projects.length; i++) {
			if(this.projects[i].id == id) {
				post = this.projects[i];
				i == 0 ? post.prev_post = null : post.prev_post = this.projects[i-1];
				i == this.projects.length-1 ? post.next_post = null : post.next_post = this.projects[i+1];
				return post;
			}
		}
	}
};

module.exports = posts;