import _ from 'underscore';

/**
 * 
 * @param {Array<String>} tiposCartas ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales ejemplo: ['A','J','Q','K']
 * @returns {Array} retorna un nuevo deck de cartas
 */
export const crearDeck = ( tiposCartas, tiposEspeciales ) => {

    if ( !tiposCartas || tiposCartas.length === 0 ) 
        throw new Error('TiposDeCartas es obligatorio como un arreglo');

    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo');

    let deck = [];

    for ( let i = 2; i <= 10; i++){
        for (let tipo of tiposCartas) {
            deck.push(i + tipo);
            
        }
    }

    for (let tipo of tiposCartas) {
        for (let especial of tiposEspeciales) {
            deck.push(especial + tipo);
        }
    }

    return deck = _.shuffle( deck );
}
