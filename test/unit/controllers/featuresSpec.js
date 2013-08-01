
define([ 'angular', 'angularMocks', 'app' ], function( angular, mocks, app ) {

  'use strict';

  describe('Controller: features', function () {

    var featureController,
      scope;


    // console.log( mocks.module( 'app.controllers' ) );

    // Initialize the controller and a mock scope
    beforeEach(function() {

      mocks.module( 'app.controllers' );
      mocks.module( 'app.services' );

      mocks.inject( function( $rootScope, $filter, $controller ) {

        scope = $rootScope.$new();
        featureController = $controller( 'features', { $scope: scope });

      });

    });

    it('should have features', function () {
      
      expect( scope.features ).toBeDefined();
      expect( scope.features ).toEqual(jasmine.any(Array));
      expect( scope.features.length ).toEqual( 7 );

    });

    it('should have angular as its first feature', function () {
      
      expect( scope.features[0] ).toBeDefined();
      expect( scope.features[0] ).toEqual(jasmine.any(Object));
      expect( scope.features[0].name ).toEqual( 'angular' );

    });

    it('should be possible to add features', function() {

      scope.features.unshift({

        name  : 'Test feature'

      });

      expect( scope.features ).toBeDefined();
      expect( scope.features ).toEqual(jasmine.any(Array));
      expect( scope.features.length ).toEqual( 8 );

      expect( scope.features[0] ).toBeDefined();
      expect( scope.features[0] ).toEqual(jasmine.any(Object));
      expect( scope.features[0].name ).toEqual( 'Test feature' );

    });

  });

});
