const materias = {
    fisica: [90,8,4,"Fisica"],
    quimica: [98,3,2, "Quimica"],
    programacion: [81,2,3, "Programación"]
}

const aprobado = () =>{
    for(materia in materias){
        let asistencia = materias[materia][0];
        let trabajos = materias[materia][1];
        let proyectos = materias[materia][2];

        console.log(console.group(materias[materia][3]));



        if (asistencia >= 90) {
            console.log("%c  Asistencia Aprobada", "color: green");
        } else {
            console.log("%c  Asistencia casi nula", "color: red");
        }

        if (trabajos >= 3){
            console.log("%c  Cumpliste con la mayoria de trabajos", "color: green");
        } else {
            console.log("%c  No cumpliste con la mayoria de tus trabajos", "color: red");
        }

        if (proyectos >= 3){
            console.log("%c  Cumpliste con los requisitos de los proyectos", "color: green")
        } else {
            console.log("%c  No cumpliste con el proyecto", "color: red");
        }
        console.groupEnd();
}
}

aprobado();