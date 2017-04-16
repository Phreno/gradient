/**
 * Retourne un tableau de couleurs (n=steps elements) qui font le gradient entre
 * startColor et endColor.
 *
 * @startColor  [hexadecimal]   couleur signifiant le minimum
 * @endColor    [hexadecimal]   couleur signifiant le maximum
 * @steps       [int]           nombre de couleurs intermédiaires 
 */


/********************************************
 * @see http://stackoverflow.com/a/12934900 *
 ********************************************/

module.exports=function ( startColor, endColor, steps ) {
    var start = { 
        'Hex'   : startColor,   
        'R'     : parseInt( startColor.slice( 1,3 ), 16 ),
        'G'     : parseInt( startColor.slice( 3,5 ), 16 ),
        'B'     : parseInt( startColor.slice( 5,7 ), 16 )
    }

    var end = {
        'Hex'   : endColor,
        'R'     : parseInt( endColor.slice( 1,3 ), 16 ),
        'G'     : parseInt( endColor.slice( 3,5 ), 16 ),
        'B'     : parseInt( endColor.slice( 5,7 ), 16 )
    }

    diffR = end[ 'R' ] - start[ 'R' ];
    diffG = end[ 'G' ] - start[ 'G' ];
    diffB = end[ 'B' ] - start[ 'B' ];
    stepsHex  = new Array();
    stepsR    = new Array();
    stepsG    = new Array();
    stepsB    = new Array();

    for( var i = 0; i <= steps; i++ ) {
        stepsR[i] = start[ 'R' ] + (( diffR / steps ) * i );
        stepsG[i] = start[ 'G' ] + (( diffG / steps ) * i );
        stepsB[i] = start[ 'B' ] + (( diffB / steps ) * i );
        stepsHex[i] = '#' 
            + Math.round( stepsR[i] ).toString( 16 ) + '' 
            + Math.round( stepsG[i] ).toString( 16 ) + '' 
            + Math.round( stepsB[i] ).toString( 16 );
    }
    while( 7 > stepsHex.length ){
        stepsHex += '0';
    }
    return stepsHex;
}
