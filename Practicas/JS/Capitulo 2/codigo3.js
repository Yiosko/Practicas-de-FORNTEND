//Hay un pequeño curso donde asisten personas en vacaciones de verano,
//este verano se tomaron las inscripciones el primero de junio a un numero predeterminado de personas
//en este curso para poderse graduar debe tener un minimo de asistencia del 80% (el curso dura 10 dias).

//crea un programa donde ingresen el numero de alumnos, tome la asistencia los 10 dias durante el curso y
// imprima quienes aprobaron y quienes perdieron.

//bienvenida, una ventana emergente de 'bienvenida' al programa
alert("curso de verano")
//valor que ingresa el numero de estudiantes
let numeroEstudiantes = prompt("¿Cuantos estudiantes se inscribieron?");
//array que ingresa nombre y asistencia de estudiantes
let estudiantesCurso = [];

//for donde se ingresa el nombre de los numeros del estudiante a un array
for(let i = 0; i <numeroEstudiantes; i++){
    estudiantesCurso[i] = [prompt(`nombre del estudiante ${i + 1}`), 0];
}

//funcion que ingresa listado de estudiante

const Listado = (estudianteL,p,def) => {
    let asistencia = prompt(`el estudiante ${estudianteL} asistio al dia ${p+1} ? (A si asistio B si no)`);
    if (asistencia == "a" || asistencia == "A"){
        estudiantesCurso[def][1]++
    }

    
}

//for que llama la funcion de listado para ingresar los valores

for(let i = 0; i < 10; i ++ ){
    for(estudiante in estudiantesCurso){
        Listado(estudiantesCurso[estudiante][0], i,estudiante);

    }
    
}

for(estudiante in estudiantesCurso){
    
        //variable con el mensaje que dice la asistencia y las fallas del estudiante

        let resultadoFinal = `estudiante ${estudiantesCurso[estudiante][0]} <br><br>
        Asistio: ${estudiantesCurso[estudiante][1]} <br><br>
        Falto: ${10 - estudiantesCurso[estudiante][1]}`;

        //if que define si aprobo el curos o reprobo

        if (10 - estudiantesCurso[estudiante][1] > 2) {
            resultadoFinal += ` <b>Reprobaste el cursos</b> <br><br><br>`
        }else {
            resultadoFinal += `<br><br><br>`
        }
        //imprimir
        document.write(resultadoFinal);
}