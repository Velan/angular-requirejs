
/*global define */

define([

  'angular',
  'controllers/welcome',
  'controllers/feature',
  'controllers/features'

], function(

  angular,
  welcomeController,
  ressourceController,
  ressourcesController

) {

  'use strict';

  var module = angular.module( 'app.controllers', [])
    .controller( 'welcome', welcomeController )
    .controller( 'feature', ressourceController )
    .controller( 'features', ressourcesController );

  return module;

});
