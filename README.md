# angular-requirejs

Boilerplate project to quick start an angular project with AMD, Bower.js, Grunt.js and Compass


## Foreword

I would first like to stress out that I am very new to the angular world. This started as a need on a current project. I was disastisfied whith Angular's lack of support for AMD-style file dependencies and minification, but did not find a dev environment as compelling as Yeoman's Webapp generator.

I therefore decided to start with a new Webapp and see if I can adapt it for Angular and to learn more about the internals and apis of Angular itself.

Ultimately, this is, for now, my sandbox to test out ideas and implementations. :)

## Goals

  * Come up with a single minified javascript file containing both the Angular logic and other dependencies.
  * A compelling build process with integrated unit and e2e tests.
  * A small app to showcase how to start.

## Acknowledgements

  * [AngularJS](http://angularjs.org/) for the awesome framework they're putting up.
  * [Yeoman](http://yeoman.io/) and [generator-webapp](https://github.com/yeoman/generator-webapp) teams for the tremendous work they have put up and how much they simplified front-end development over the past year.
  * All the people on Github, Stackoverflow and the web I have shamelessly stolen good ideas from.

## How to start

* Install [Node.js](http://nodejs.org/), you also need Git, Ruby and Compass if you plan on using them.
* ```npm -g install grunt-cli bower```
* ```git clone git@github.com:Velan/angular-requirejs.git your_project_name```
* Once in the folder of you local copy run ```npm install``` and ```bower install```

## Warnings

This project has jshint, that means if you don't write pistine code, you'll probably get some errors when trying to build your app. This can help a lot about learning some good coding practices and to stay consistent. I strongly recommend reading [jshint's doc](http://jshint.com/docs/) when you have errors you don't really understand.

Don't forget to change/remove the default tests.

## Documentation

Soon, hopefully...

## Bugs

There are some issues with e2e tests on multiple browsers. Sometimes the test fails for no obvious reasons on different browsers and I haven't managed to make it work on Chrome at all, browser().navigate() completely fails after the first test.

## Future

I still plan to expand on this project in the future. Here's a list of upcoming ideas I would like to implement.

* Code documentation to explain some choices.
* Travis CI integeration.
* Karma integration with grunt-connect and livereload.
* Jsdoc integration.
* Show how to integrate some third-party libraries such as socket.io or hammer.js
* Maybe create a Yeoman generator down the road.
