
//funcion que contiene a las materias y los alumnos (materia[materias[alumnos]])
let obtenerInformacion = (materia) => {
    //Objeto que contiene materia y estudiante
   let materias = {
        fisica: ["Rodriguez","Juan", "Andres","Patricia"],
        programación: ["Lorenzo","Juan", "carlos", "Maria", "Patricia"],
        matematicas: ["Carvajal","Andres", "carlos", "Maria", "Patricia"],
        ingles: ["Androtenni","Juan", "Andres", "carlos", "Maria",]

    }
    // condicion que recorre al objeto
    if (materias[materia] != undefined){//si materias contiene materias que se ejecute
       return [materias[materia], materia, materias]; //retorna todas las partes del objeto
    } else {
        return materias; //sino que retorne el objeto no definido
    }

}
//funcion que muestra al alumno a cuantas materias esta asignado
const cantidadDeClase = (alumnos) => {
    let informacion = obtenerInformacion(); // variable donde se guarda el objeto
    let clasesPresentes = [];
    let CantidadTotal = 0; //cantidad de materias por el momento es 0
    for (info in informacion) { //ciclo que recorre el objeto
        if (informacion[info].includes(alumnos)){ //metodo que toma el alumno que buscamos de las materia
            CantidadTotal++; //si se encuentra que se sume como asiste a esa materia
            clasesPresentes.push(info + " "); //ingresa las clases en las que esta presente
        }
    }
    // retorne mensaje de la cantidad de materias que asiste el alumno
    return `el estudiante <b>${alumnos}</b> asiste a <b>${CantidadTotal}</b> materias <br>
    ...esta cursando en los siguientes cursos <b>${clasesPresentes}</b> <br><br>`;
}
//funcion que muestra el maestro la asignatura y los estudiantes
const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia);//variable que guarda todas las materias del objeto
    let profesor = obtenerInformacion(materia)[0][0]; //variable que guarda el primer indice de la materia de cada objeto (profesor);
    let estudiante = obtenerInformacion(materia)[0]; // variable que guarda los indices de la materia del objeto (estudiantes incluido profesor);
    estudiante.shift();//elimina el primer indice (profesor) dejando solo los estudiantes
    
    if (informacion !== false) { //condición si la formacion es verdadera que se ejecute la información
    
        document.write(`El profesor <b style="color:red">${profesor}</b> de la asignatura <b>${informacion[1]}</b> estan matriculados: <b>${estudiante}</b> <br><br>`);
    }
}

mostrarInformacion("fisica");
mostrarInformacion("programación");
mostrarInformacion("matematicas");
mostrarInformacion("ingles");

document.write(cantidadDeClase("Juan"));

document.write("<br><br><br>");


let materias = {
    fisica: ["Rodriguez","Juan", "Andres","Patricia"],
    programación: ["Lorenzo","Juan", "carlos", "Maria", "Patricia"],
    matematicas: ["Carvajal","Andres", "carlos", "Maria", "Patricia"],
    ingles: ["Androtenni","Juan", "Andres", "carlos", "Maria",]

}

const registarAlumnos = (alumno,materia) => {
    personas = materias[materia];
    
    if (personas.length >= 6) {
        document.write(`lo sentimos <b style="color:green">${alumno}</b> no puede inscribirse a ${materia} <br> <br>`);
    } else {
        personas.push(alumno);
        if (materia == "fisica"){
            materias = {
                fisica: personas,
                programación: materias["programación"],
                matematicas: materias["matematicas"],
                ingles: materias["ingles"]
                
            }
            document.write(`felicidache <b style="color:green">${alumno}</b> a ingresado a <b>${materia}</b> <br><br>`);
        }
        else if (materia == "programación") {
            materias = {
                fisica: materias["fisica"],
                programación: personas,
                matematicas: materias["matematicas"],
                ingles: materias["ingles"]
                
            }
           
        }
        else if (materia == "matematicas") {
            materias = {
                fisica: materias["fisica"],
                programación: materias["programación"],
                matematicas: personas,
                ingles: materias["ingles"]
            
            }
            document.write(`felicidache <b style="color:green">${alumno}</b> a ingresado a <b>${materia}</b> <br><br>`);
        }
        else if (materia == "ingles") {
            materias = {
                fisica: materias["fisica"],
                programación: materias["programación"],
                matematicas: materias["matematicas"],
                ingles: personas
            
            }
           
        }
        

    }

}

registarAlumnos("Poter", "fisica");
registarAlumnos("Karoll", "fisica");
registarAlumnos("Carmen", "matematicas");
registarAlumnos("Trolo", "fisica");
registarAlumnos("juanicio", "fisica");
registarAlumnos("Bob", "fisica");
registarAlumnos("Kiliian", "matematicas");


document.write(`Estudiantes actuales de <b style="color:red">Fisica</b> : ${materias["fisica"]} <br>`)

mostrarInformacion("fisica")