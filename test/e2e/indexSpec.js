
'use strict';

describe('Scenarios: index page', function () {

  beforeEach(function() {

    browser().navigateTo( '/' );
    sleep( .1 );

  });

  it( 'should be on the homepage', function() {

    expect( browser().location().url() ).toBe( '/' );

  });

  it( 'should have a .content element', function() {

    expect( repeater( '.content' ).count() ).toEqual( 1 );

  });

  it( 'should go to the features page after clicking on the features link', function() {

    element( '[href="#/features"]' ).click();
    expect( browser().location().url() ).toBe( '/features' );

  });

});
