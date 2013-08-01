
require.config({

  paths: {

    angular: '../bower_components/angular/angular'

  },

  shim: {

    angular: {

      exports: 'angular'

    }

  },

  priority: [

    'angular'

  ]

});

require([
  'angular',
  'app'

], function( angular, app ) {

  'use strict';

  angular.bootstrap( document.body, [ app.name ]);
  document.body.className += ' ng-app';

});
