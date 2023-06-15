/**
 * retorna un mensaje
 */
export const determinarGanador = ( puntosMinimos, puntosComputadora, puntosJugadores ) => {

    const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

    setTimeout(() => {
        if ( puntosComputadora === puntosMinimos ) {
            alert('Nadie gano');
        }
        else if ( puntosMinimos > 21){
            alert('Computadora Gana')
        }
        else if ( puntosComputadora > 21 ){
            alert('Jugador gana')
        }
        else{
            alert('computadora Gana');
        }
    }, 300);
}