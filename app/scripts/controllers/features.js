
/*global define */

define([], function() {

  'use strict';

  var controller = function( $scope, RessourceModel ) {

    $scope.features = RessourceModel;

  };

  controller.$inject = [ '$scope', 'RessourceModel' ];

  return controller;

});
