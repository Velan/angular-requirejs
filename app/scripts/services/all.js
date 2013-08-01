
/*global define */

define([

  'angular',
  'services/RessourceModel'

], function(

  angular,
  RessourceModel

) {

  'use strict';

  var module = angular.module( 'app.services', [])
    .factory( 'RessourceModel', RessourceModel );

  return module;

});
