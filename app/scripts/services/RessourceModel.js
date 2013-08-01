
/*global define */

define([], function() {

  'use strict';

  var factory = function() {

    return [

      {
        name      : 'angular',
        desc      : 'HTML enhanced for web apps!',
        type      : 'client'
      },
      {
        name      : 'modernizr',
        desc      : 'Modernizr is a JavaScript library that detects HTML5 and CSS3 features in the user’s browser.',
        type      : 'client'
      },
      {
        name      : 'requirejs',
        desc      : 'RequireJS is a JavaScript file and module loader.',
        type      : 'client'
      },
      {
        name      : 'gruntjs',
        desc      : 'The JavaScript Task Runner',
        type      : 'server'
      },
      {
        name      : 'bower',
        desc      : 'A package manager for the web',
        type      : 'server'
      },
      {
        name      : 'compass',
        desc      : 'Compass is an open-source CSS Authoring Framework.',
        type      : 'style'
      },
      {
        name      : 'karma',
        desc      : 'Spectacular Test Runner for JavaScript',
        type      : 'test'
      }

    ];

  };

  return factory;

});
