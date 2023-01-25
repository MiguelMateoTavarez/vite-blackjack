
/**
 * 
 * @param {Array<String>} deck Array of string with all the cards
 * @returns {<String>} return a card of the deck
 */

export const pedirCarta = (deck) => {
    
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}