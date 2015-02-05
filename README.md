# Node Starter Kit

A barebones Node.js app using [Express 4](http://expressjs.com/).

This is a work in progress that I use for cloning new projects. It is based off of [my portfolio site](http://tjphilli.com) so many colors, type settings, content, etc are artifacts of that. 


## Running Locally

Make sure you have [Node.js](http://nodejs.org/)

```sh
$ git clone git@github.com:tjphilli/node-starter.git # or clone your own fork
$ cd node-starter
$ npm install
$ bower install
$ nodemon app.js
```

Your app should now be running on [localhost:5000](http://localhost:5000/).


## Documentation

Included is a post-receive hook for DO instances
Make sure that nginx is configured to get the proper port
