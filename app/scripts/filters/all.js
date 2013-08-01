
/*global define */

define([

  'angular',
  'filters/capitalize'

], function(

  angular,
  capitalizeFilter

) {

  'use strict';

  var module = angular.module( 'app.filters', [])
    .filter( 'capitalize', capitalizeFilter );

  return module;

});
