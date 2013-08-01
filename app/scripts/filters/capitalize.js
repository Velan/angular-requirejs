
/*global define */

define([], function() {

  'use strict';

  var filter = function() {

    return function( input ) {

      return input.charAt( 0 ).toUpperCase() + input.slice( 1 );

    };

  };

  return filter;

});
