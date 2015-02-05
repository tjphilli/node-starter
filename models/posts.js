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
		new Project("Picks", "Picks is an iOS app designed to help you choose your favorite photos to share & get rid of the rest. Picks was made at PennApps Winter 15 &amp; placed in the top 10")
		,new Project("Trump", "Trump is a social game made natively for iOS. Trump won at PennApps, a Division 1 Hackathon, placing in the top ten projects out of several hundred. I designed and help build it.", {is_jpg: true})
		,new Project("Walk With Me", "Walk With Me is an iOS app to help address personal safety issues, designed and built in a weekend at PennAppsX, winning top prizes from Facebook &amp; Uber.")
		,new Project("Dlixd", "Dlixd is a concept in its early stages that I'm developing for my thesis project. The purpose of the project is to curate and analyze delightful details in design.")
		,new Project("Gutenberg", "Gutenberg is an experimental type tester for learning and playing with web typography. Designed by me, built by me in AngularJS and Node.js.")
		,new Project("Resumazing", "Resumazing helps job seekers get noticed by offering feedback on their resumes, powered by big data and machine learning. I designed and built our site and product.")
		,new Project("Bathchat", "Bathchat was built for Software Design & Documentation at Rensselaer. Bathchat explores the pensive nature of the bath through a unique sharing experience.")
		,new Project("CDTA", "I worked to redesign the Capital District Transportation Authority’s existing desktop and mobile web site as a responsive site while working for Troy Web Consulting.", {image_bake: "project-detail-intro-image--smaller-width"})
	],
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