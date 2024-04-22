/**
 * Julian está planificando un viaje y necesita un programa en JavaScript que lo ayude a organizar su itinerario. Este programa debe permitirle definir y ajustar el destino, la duración del viaje en días y el presupuesto estimado para el viaje. Es importante que Julian pueda modificar algunos de estos datos a medida que planifica, mientras que otros permanecerán constantes.
 */

//destino
const destino = prompt('ingresa destino');
console.log(destino);
//duracion del viaje
let dias = parseInt(prompt('cuantos dias viajaras'));
console.log(dias);
//presupuesto
let presupuesto = parseInt(prompt('presupuesto para el viaje'));
console.log(presupuesto);
//costo de transporte
let transporte = parseInt(prompt('ingrese costo de transporte'));
console.log(transporte);
//costo de alojamiento
let alojamiento = parseInt(prompt('ingrese costo de alojamiento'));
console.log(alojamiento);
//costo de actividades y esparcimiento
let cosActivi = parseInt(prompt('ingrese costo de actividades por dia'));
console.log(cosActivi);

//costo del viaje
let costoTotal = cosActivi * dias + transporte + alojamiento;
if (costoTotal <= presupuesto) {
  console.log(
    'el costo del viaje es de ' +
      costoTotal +
      ', tienes el presupuesto suficiente para estar ' +
      dias +
      ' dias en ' +
      destino
  );
} else if (costoTotal > presupuesto) {
  let alcateDinero = presupuesto - transporte - alojamiento;
  let dias = alcateDinero / cosActivi;
  console.log(
    'el viaje tien un costo de ' +
      costoTotal +
      ' con tu presupuesto puedes estar ' +
      dias +
      ' dias en ' +
      destino
  );
}
