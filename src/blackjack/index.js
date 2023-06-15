import _ from 'underscore';
import { crearDeck, pedirCarta, valorCarta, crearCarta } from './usecases';

// funcion anonima auto invocadas
const miModulo = ( () => {
  'use strict';
  
  
  let deck = [];
  const tipos = ['C','D','H','S'], especiales = ['A','J','Q','K'];

  let puntosJugadores = [];

  // Referencias Pedir
  const btnPedir = document.getElementById("btnPedir"),
        btnDetener = document.getElementById("btnDetener"),
        btnNuevo = document.getElementById("btnNuevo");

  const divCartasJugadores = document.querySelectorAll('.divCartas'),
       small = document.querySelectorAll('small');

  // esta funcion inicializa el juego
  const inicializaJuego = ( numJugadores = 2 ) => {
      deck = crearDeck(tipos, especiales);

      puntosJugadores = [];
      for (let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);
      }

      small.forEach( item => item.innerText = 0);
      divCartasJugadores.forEach( item => item.innerHTML = "");

      btnPedir.disabled = false;
      btnDetener.disabled = false;
  }


  // turno: 0 = primer jugador y el ultimo sera la computadora
  const acumularPuntos = ( pedirCarta ,turno ) => {
      puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( pedirCarta );
      small[turno].innerText = puntosJugadores[turno];

      return puntosJugadores[turno];
  }

  const determinarGanador = () => {

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

  // turno de la computadora para optener el valor de la carta
  const turnoComputadora = ( puntosMinimos ) => {

      let puntosComputadora = 0;

      do {
          const carta = pedirCarta(deck);
          puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
          crearCarta( carta, puntosJugadores.length - 1, divCartasJugadores);

      } while ( (puntosComputadora < puntosMinimos) && ( puntosMinimos <= 21 ) );
      
      determinarGanador();
  }

  // Eventos
  btnPedir.addEventListener('click', () => {
      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos( carta, 0 );

      crearCarta( carta, 0, divCartasJugadores);


      if ( puntosJugador > 21) {
          console.log('Lo sineto mucho Perdio');

          btnPedir.disabled = true;
          btnDetener.disabled = true;

          turnoComputadora( puntosJugador );
      }
      else if ( puntosJugador === 21 ){
          console.log('Felicidades a ganado');

          btnPedir.disabled = true;
          btnDetener.disabled = true;

          turnoComputadora( puntosJugador );
      }
  })

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;

      turnoComputadora(puntosJugadores[0]);
  })

  // Accion para inicializar el nuevo juego
  btnNuevo.addEventListener('click', () => {
      inicializaJuego();
  })

  return {
      nuevoJuego: inicializaJuego
  };
})();

