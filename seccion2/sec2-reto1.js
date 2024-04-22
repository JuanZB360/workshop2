let clima;
let energia;
let cargtraba;
let actividades = [];
const activi = {
    NomActi:null,
    estadoAnimo:null,
    clima:null,
};

let usuario = prompt("ingresa tu nombre: ");
alert("hola "+usuario+" soy tu asistente JAZA acontinuacion ingresa las actividades que te gusta realizar.")

let validar = true;
while(validar){
    activi.NomActi= prompt("Nombre de la actividad: ");
    
    activi.estadoAnimo = prompt("en que estado de animo te gusta realizar la actividad bien o mal: ");
    activi.clima=prompt("en que clima puedes realizar la actividad soleado o lluvioso: ");
    actividades.push(activi);
    validar=confirm("deseas agregar otra actividad: ");
};

validar=true;
while(validar){
    alert("hola "+usuario+" deseas realizar una actividad hoy veamos que puedes hacer.");
    cargtraba = prompt("¿cual es tu cargar de trabajo el dia de hoy? alta o baja: ");
    if(cargtraba==="alta"){
        alert(usuario+" lo mejor es que termines el trabajo pendiente.")
    } else{
        
        clima = prompt("¿Como esta el clima hoy?");
        energia = prompt("¿Con que animo te encuentras el dia de hoy? bien o mal:");

        if(clima==="soleado"){
            const puedehacer = []
            for(let i=0;i>=actividades.length;i++){
                if(activi.estadoAnimo === "bien"){

                    puedehacer.push(activi.nombre);

                } else if(activi.estadoAnimo === "mal"){

                    puedehacer.push(activi.nombre);

                };
            };
        }else if (clima === "lluvioso"){

            const puedehacer = []
            for(let i=0;i>=actividades.length;i++){
                if(activi.estadoAnimo === "bien"){

                    puedehacer.push(activi.nombre);

                } else if(activi.estadoAnimo === "mal"){

                    puedehacer.push(activi.nombre);

                };
            };

        };

        alert("puedes realizar estas actividades: "+puedehacer)

    };
    validar=confirm("¿Deseas buescar nuevas actividades para realizar?");
};