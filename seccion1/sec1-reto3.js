/**
 * Descripción: Julian necesita un programa en JavaScript que le ayude a decidir si puede incluir un artículo extra en su equipaje, basado en el presupuesto final que tiene después de planificar su viaje. Este programa debería evaluar si el presupuesto restante de Julian después de todos los gastos planeados es suficiente para permitirle comprar un artículo adicional sin exceder su límite financiero.
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
  //souvenirs
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

// alcance del presupuesto

      //Diner para Emergencia

let plataExtra = presupuesto - costoTotal ;
alert("Cuentas con "+plataExtra+" dinero");
let plataEmerg = Number(prompt('Cuando dinero guardaras para Emegencia: '));
console.log("guardaras "+plataEmerg);
plataExtra = plataExtra - plataEmerg;
console.log("dinero disponible $ "+plataExtra)
alert("el dinero disponible que tienes es de "+plataExtra);
let validar;

const menor = lisSouver.reduce((acumulador , elemt , indice,array) => {
  if (elemt.costo < acumulador.costo){
    acumulador.costo=elemt.costo;
    acumulador.nombre=elemt.nombre;
  }
  return acumulador;
}, {nombre:null, costo: 5000000000})

console.log("el producto con menor costo es: "+ menor)
alert("el producto con menor costo es: "+ menor)

if(plataExtra > 20000){
  validar = confirm('deseas valiardar una compra: ');
}else{
  alert('No tienes suficiente dinero para hacer mas compras.');
  validar=false;
}

while (validar) {
  let buscompra = prompt('ingrese el nombre del souvenir que deseas comprar: ');
  const souvecompra = lisSouver.findIndex((elemento) => {
    return elemento.nombre === buscompra;
  });
  console.log(lisSouver[souvecompra]);
  console.log(plataExtra , lisSouver[souvecompra].costo);
  if (plataExtra >= lisSouver[souvecompra].costo) {
      let compra = confirm("Tienes "+plataExtra+" disponible para comprar el souvenir deseas comprarlo: ")
      if(compra){
        plataExtra = plataExtra - lisSouver[souvecompra].costo;
        console.log("Compra realizada");
        if(plataExtra>=20000){
          validar= confirm("Desea realizar otra compra");
        }else{
          console.log("no cuentas con mas dinero para souvenir.");
          validar = false;
        }
        
      }
  }else{

  }
}
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
