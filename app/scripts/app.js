
/*global define */

define([

  'angular',
  'controllers/all',
  'filters/all',
  'services/all'

], function(

  angular,
  controllers,
  filters,
  services

) {

  'use strict';

  var config = function( $routeProvider ) {

    $routeProvider
    .when( '/', {

      controller: 'welcome',
      templateUrl: 'views/welcome.html'

    })
    .when( '/features', {

      controller: 'features',
      templateUrl: 'views/features.html'

    })
    .when( '/features/:name', {

      controller: 'feature',
      templateUrl: 'views/feature.html'

    })
    .otherwise({

      redirectTo: '/'

    });

  };

  /* When minified, angular's special variables are renamed, 
  they need to be explicitly injected
  */
  config.$inject = [ '$routeProvider' ];

  var app = angular.module( 'app',
    [
      controllers.name,
      filters.name,
      services.name
    ])
    .config( config );

  return app;

});
