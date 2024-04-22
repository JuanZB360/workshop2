/**
 * Descripción: Julian desea tener un programa en JavaScript que le permita gestionar una lista de souvenirs potenciales para comprar durante su viaje. Cada souvenir tiene características específicas: un nombre, un costo y la disponibilidad para la compra. Es importante que Julian pueda evaluar cada uno de estos aspectos, que están representados por diferentes tipos de datos en el programa.
 */

let iterador = confirm('¿desea comprar souvenir?');
let lisSouver = [];

while (iterador) {
  let nombre = prompt('nombre: ');
  console.log('souvenir: ' + nombre + ' ' + typeof nombre);
  let costo = Number(prompt('costo: '));
  console.log('costo: ' + costo + ' ' + typeof costo);
  if (isNaN(costo) || typeof nombre !== 'string') {
    alert('los datos ingresados no son validos');
    continue;
  }

  let disponi = confirm('esta disponible ahora: ');
  console.log('disponible: ' + disponi + ' ' + typeof disponi);

  const souvenir = {
    nombre,
    costo,
    disponi,
  };

  lisSouver.push(souvenir);

  iterador = confirm('deseas ingresar un nuevo souvenir: ');
}
console.log(lisSouver);

let buscar = confirm('desea buscar un souvenir en la lista que ingreso: ');
while (buscar === true) {
  let busSuove = prompt('ingrese el nombre del souvenir que deseas buscar: ');
  const busqueda = lisSouver.findIndex((elemento) => {
    return elemento.nombre === busSuove;
  });
  console.log(lisSouver[busqueda]);
  buscar = confirm('deseas realizar una nueva busqueda: ');
}
