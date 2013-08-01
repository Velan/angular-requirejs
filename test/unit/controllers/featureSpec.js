
define([ 'angular', 'angularMocks', 'app' ], function( angular, mocks, app ) {

  'use strict';

  describe('Controller: feature', function () {

    var featureController,
      scope;


    // console.log( mocks.module( 'app.controllers' ) );

    // Initialize the controller and a mock scope
    beforeEach(function() {

      mocks.module( 'app.controllers' );
      mocks.module( 'app.services' );

      mocks.inject( function( $rootScope, $filter, $controller ) {

        scope = $rootScope.$new();
        featureController = $controller( 'feature', { $scope: scope, $routeParams: 'bower' });

      });

    });

    it('should have bower as the attached feature', function () {

      expect( scope.feature ).toBeDefined();
      expect( scope.feature ).toEqual(jasmine.any(Object));
      expect( scope.feature.name ).toEqual( 'bower' );
      expect( scope.feature.desc ).toEqual( 'A package manager for the web' );
      expect( scope.feature.type ).toEqual( 'server' );

    });

  });

});
