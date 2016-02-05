'use strict';

THREE.Shape.Utils.triangulateShape = function( contour, holes ){

    var i, il, dim = 2, result, points = contour;
    var holeIndices = [];
    var vertices = [];

    for( i = 0, il = holes.length; i < il; i++ ){

        holeIndices.push( points.length );

        points = points.concat( holes[i] );

    }

    for( i = 0, il = points.length; i < il; i++ ){

        vertices.push( points[i].x, points[i].y );

    }

    result = earcut( vertices, holeIndices, dim );

    var grouped = [];

    for ( i = 0, il = result.length; i < il; i += 3 ) {

        grouped.push( result.slice( i, i + 3 ) );

    }

    return grouped;

};