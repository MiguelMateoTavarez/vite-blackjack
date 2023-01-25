import _ from "underscore";

/**
 * This function return a new deck
 * 
 * @param {Array<String>} tiposDeCartas Ejemplo: ['C','D','H','S'] 
 * @param {Array<String>} tiposEspeciales  Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} return a new deck of cards
 */

export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if (!tiposDeCartas || tiposDeCartas.length === 0 ) 
        throw new Error('TiposDeCarta es obligatorio');
    if (!tiposEspeciales) throw new Error('TiposEspeciales es obligatorio');


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    deck = _.shuffle( deck );

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    
    deck = _.shuffle(deck);

    return deck;
}