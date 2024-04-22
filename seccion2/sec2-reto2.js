let validar = true;
let necesario = [];
let innecesario = [];
let compras= [];
let gastos;

var presupuesto = Number(prompt("Ingresa tu presupuesto"));
let ahorro = Number(prompt("Cuanto deseas ahorrar: "))
presupuesto -= ahorro;

const prioridad = {
    nombre : "ahorro",
    costo: ahorro,
    priori: true
}
necesario.push(prioridad);

while(validar){

    let nombre = prompt("Ingrese el nombre");
    console.log("nombre: "+nombre);
    let costo = Number(prompt("Ingrese el costo"));
    console.log("costo: "+costo);
    let priori = confirm("¿Es prioritario?");
    console.log("prioridad: "+priori);

    if(priori === true){

        presupuesto -= costo;

        if(presupuesto > 0){
            const prioridad = {
                nombre,
                costo,
                priori
            }
            necesario.push(prioridad);
        }else{

            alert("tu presupuesto no alcansa para suplir los gastos prioritarios.");
            presupuesto + costo;

        };

    }else{

        const noprioridad = {
            nombre,
            costo,
            priori
        }
        innecesario.push(noprioridad);

    }

    validar=confirm("Desea realizar un nuevo gasto.");
};

console.log("Gastos necesarios: ");
console.log(necesario);
console.log("Gastos innecesarios: ");
console.log(innecesario);

function gastosnecesarios (necesario){
    let resultado = 0;
    for(let i of necesario){
        resultado += i.costo;
    };
    return resultado;
}
let gastonece = gastosnecesarios(necesario);

console.log("Tu presupuesto es de $"+presupuesto);
console.log("Los gastos prioritarios suman $"+gastonece);

validar = confirm("Deseas comprar algo fuera de las prioridades");
while(validar){

    let compra = prompt("nombre productocto de deseas comprar");

    for(let i of innecesario){
        
        if(i.nombre == compra){
            
            if(presupuesto - i.costo > 0){
                alert("Compra realizada");
                validar = confirm("Deseas comprar algo mas.");
                nombre = i.nombre;
                costo = i.costo;
                const comprarealizada = {
                    nombre,
                    costo,
                };
                compras.push(comprarealizada);

            }else{
                alert("No tienes suficiente dinero para realizar la compra");
                presupuesto += i.costo;
                validar = false;
            };
            
        }else{

            validar = confirm("El producto no se encuentra deseas agregarlo.");
            if(validar){
                let nombre = compra;
                let costo = Number(prompt("cuanto cuesta"))
                if(presupuesto - costo > 0){
                    const noprioridad = {
                        nombre,
                        costo,
                        priori: true,
                    }
                    innecesario.push(noprioridad);
                    validar=confirm("Vas acomprarlo")
                    if (validar){
                        alert("Compra realizada");
                        presupuesto -= costo;
                    }else{
                        validar = confirm("Deseas comprar algo mas.");
                    };
                }else{
                    alert("no tienes presupuesto para comprarlo.")
                    validar = confirm("Deseas comprar algo mas.");
                };
            };

        };

    };

};

let sumacompra = gastosnecesarios(compras);
console.log("las compras extras suman $"+sumacompra);
console.log("tu presupuesto es de $"+presupuesto);

console.log("estos son los gastos que tuviste: ");
console.log("gastos prioritarios: ");
console.log(necesario);
console.log("estos fueron tus gastos extras: ");
console.log(compras);

if (presupuesto > 0){
    let sumarahorro = confirm("Deseas guardar estos $"+presupuesto+" en ahorro");
    if (sumarahorro){
        ahorro += presupuesto;
    }
};
console.log("Tu ahorrro es de $"+ahorro);