import { pedirCarta, valorCarta, crearCarta } from './';

/**
 * 
 * @param {Number} puntosMinimos min points that the computer need to win
 * @param {HTMLElement} puntosHTML
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, deck ) => {

    if(!puntosHTML) throw new Error('Argumento puntosHTML es necesario');
    if(!deck) throw new Error('El deck es necesario');

    let puntosComputadora = 0;
    const divCartasComputadora = document.querySelector('#computadora-cartas');

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCarta(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}