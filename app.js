fs = require('fs');
var env = process.argv[2] || process.env.NODE_ENV || 'development';
var views_folder = (env == 'production') ? './__rendered/views' : './views';

var marked = require('marked');
var express = require('express');
var faviconm
var http = require('http');
var app = express();
var favicon = require('serve-favicon');
var globals = require('./models/globals.js');
var posts = require('./models/posts.js');




var homeController = require('./controllers/home.js');
var contentPagesController = require('./controllers/content.js');
var postsController = require('./controllers/posts.js');
var errorController = require('./controllers/404.js');

app.set('port', (process.env.PORT || 5000))

if(env == 'development') {
	app.use(express.static(__dirname + '/public'));
	app.use(favicon(__dirname + '/public/favicon.ico'));
} 
else if(env == 'production') {
	app.use(express.static('__rendered/public'));
	app.use(favicon('__rendered/public/favicon.ico'));
}

app.set('views', views_folder);
app.set('view engine', 'jade');


app.get('/', homeController.index)
app.get('/about', contentPagesController.about)
app.get('/posts/:post', postsController.post)
app.get('*', errorController.errorPage)



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
