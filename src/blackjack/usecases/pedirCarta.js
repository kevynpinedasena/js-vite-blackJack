/**
 * 
 * @param {Array<String>} deck es un arreglo de string
 * @returns {string} retorna una carta del deck
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) 
        throw new Error('No hay Cartas en el deck');

    if (deck.length === 0) {
        throw 'No hay Cartas en el deck';
    }

    return deck.pop();
}