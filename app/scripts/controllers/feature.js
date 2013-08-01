
/*global define */

define([], function() {

  'use strict';

  var controller = function( $scope, $routeParams, $filter, RessourceModel ) {

    $scope.feature = $filter('filter')( RessourceModel, $routeParams )[0] || {};

  };

  controller.$inject = [ '$scope', '$routeParams', '$filter', 'RessourceModel' ];

  return controller;

});
