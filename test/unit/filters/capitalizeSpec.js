
define([ 'angular', 'angularMocks', 'app' ], function( angular, mocks, app ) {

  'use strict';

  describe('Filter: capitalize', function () {

    var word = 'uncapitalized',
      capitalize,
      capitalizedWord;

    beforeEach( module( 'app.filters' ) );

    beforeEach( inject( function( $filter ) {

      capitalize = $filter( 'capitalize' );

      capitalizedWord = capitalize( word );

    }));

    it( 'should be a function', function() {

      expect( capitalize ).toEqual( jasmine.any(Function) );

    });

    it( 'should return a capitalized word', function() {

      expect( capitalizedWord ).toEqual( 'Uncapitalized' );

    });


  });

});
