let materias = {
    fisica: ["Andres", "Carlos", "Pedro"],
    quimica: ["Julian", "Andres", "Pedro", "Juan"],
    matematicas: ["Carlos", "Diego", "Juan", "Andres"]

}

const mostrarInformacion = (materia) => {
    let estudiantes = materias[materia];

    document.write(`En ${materia} cursan los siguientes estudiantes ${estudiantes} <br> <br>`);
}

const mostrarAsistencia = (estudiante) => {
    let clasesPresente = [];
    let cantidadAsistencia = 0;

    for (alumn in materias) {
        if (materias[alumn].includes(estudiante)){
            cantidadAsistencia ++;
            clasesPresente.push(alumn + " ")

            
        }
    }
    return`el estudiante ${estudiante} asiste a ${cantidadAsistencia} las clases presentes: ${clasesPresente} <br><br>`;
}

const ingresarAlumno = (alumno,curso) => {
    let persona = materias[curso];

    if (persona.length >= 10) {
       document.write(`Lo sentimos el alumno ${alumno} no puede ingresar a la materia: ${curso} <br><br>`);
    } else {
        persona.push(alumno);
        if (curso == "fisica"){
            materias = {
                fisica: persona,
                quimica: materias["quimica"],
                matematicas: materias["matematicas"]
            
            }

            document.write(`felicidades el estudiante ${alumno} a ingresado a ${curso} <br><br>`);
        }
    }
}


mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("matematicas");

document.write(mostrarAsistencia("Andres"));

ingresarAlumno("Juaquin", "fisica");
mostrarInformacion("fisica");


