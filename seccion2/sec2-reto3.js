let maleta = [];
let articuloseleccionado = [];
let soleado = [];
let lluvioso = [];
let otros = [];

//saludo e ingreso del usuario
let usuario =prompt("Ingresa tu nombre ");
alert("Hola "+usuario+" necesitamos que nos brindes informacion para poder ayudarte a desidir que llevar.");

let validar = true;
while(validar){

    let pesomaximo = Number(prompt("Cual es el peso maximo que puede tener tu maleta"));
    console.log("Peso maximo de la maleta: "+pesomaximo);
    let pesomaleta = Number(prompt("Que peso tiene tu maleta"));
    console.log("Peso de la maleta: "+pesomaleta)
    let duracionviaje = Number(prompt("cuanto dias durara el viaje"));
    console.log("Dias de viaje: "+duracionviaje);
    
    alert("Ingresa los articulos que tienes pensado llevar al viaje")
    while(validar===true){

        let articulo = prompt("Nombre del articulo");
        let peso = Number(prompt("Peso del articulo"));
        let clima = prompt("En que clima lo utilizas 'soleado' , 'lluvioso' o 'ambos'")

        const articulosingresados = {
            articulo,
            peso,
            clima
        };
        
        maleta.push(articulosingresados)
    
        validar = confirm("Tienes otro articulo para ingresar");
    };

    let pronosticoclima = prompt("Cual es el pronostico del clima 'soleado' o 'lluvioso'");

    if(pronosticoclima === "soleado"){

        for(let i of maleta){
            if(i.clima === "soleado"){

                soleado.push(i);
            
            }else if(i.clima==="ambos"){
            
                otros.push(i);
            
            };
        };

        console.log("Los articulos mas necesarios son: ");
        for(let i of soleado){
            console.log(i);
        };
        console.log("Los articulos extras que puedes llevar son: ");
        for(let i of otros){
            console.log(i);
        };
        

        validar = true;
        while(validar){

            let art = prompt("Nombre del articulo que vas a empacar")
            for(let i of maleta){

                if(i.articulo == art){

                    if(i.clima !== "lluvioso"){

                        if(i.peso+pesomaleta <= pesomaximo){
                            articuloseleccionado.push(i);
                            pesomaleta += i.peso;
                        }else{
                            alert("notienes mas espacio en la maleta");
                            validar=false;
                        };
    
                    }else{
                        alert("El articulo no esta en la lista")
                    };

                }
            };

            if (validar){
                validar = confirm("Empacar otro articulo.");
            }else{
                alert("El esta en su maximo")
            };
            

        };
        console.log("Peso maximo: "+pesomaximo);
        console.log("Peso de la maleta: "+pesomaleta);
        

    }else if(pronosticoclima === "lluvioso"){

        for(let i of maleta){
            if(i.clima == "lluvioso"){

                lluvioso.push(i);
            
            }else if(i.clima=="ambos"){
            
                otros.push(i);
            
            };
        };

        console.log("Los articulos mas necesarios son: ");
        for(let i of lluvioso){
            console.log(i);
        };
        console.log("Los articulos extras que puedes llevar son: ");
        for(let i of otros){
            console.log(i);
        };

        validar = true;
        while(validar){

            let art = prompt("Nombre del articulo que vas a empacar")
            for(let i of maleta){

                if(i.articulo == art){

                    if(i.clima !== "soleado"){

                        if(i.peso+pesomaleta <= pesomaximo){
                            articuloseleccionado.push(i);
                            pesomaleta + i.peso;
                        }else{
                            alert("notienes mas espacio en la maleta")
                            validar=false;
                        };
    
                    }else{
                        alert("El articulo no esta en la lista")
                    };

                }
            };
            if (validar==false){
                validar = confirm("Empacar otro articulo.");
            }else{
                alert("El esta en su maximo")
            };
        };
        console.log("Peso maximo: "+pesomaximo);
        console.log("Peso de la maleta: "+pesomaleta);
        
    };
    console.log("articulos empacados en la maleta: ")
    console.log(articuloseleccionado);

    validar = confirm("deseas gestionar una nueva decision");
};

