alert("capitulo 2");

// arreglos

frutas = ["manzana", "pera", "banana"];

//array asociativo

//objeto
let pc = {
    nombre: "RMD Ryzen 5700",
    ram: "1TB",
    años: 1,
    marca: "hp"
}
//imprimimos el arreglo asociativo "nombre"
document.write(pc["nombre"]);

// ciclos 

//break

let numeroxx = 0;

while (numeroxx < 1000) {
    numeroxx ++;

    document.write(`<br>${numeroxx}`);

     if (numeroxx == 10) {
        // hace que el ciclo termine en un punto determinado
        break;
     }
}

// saltear un numero en el bucle

for (let i = 0; i <= 5; i++){

    if (i == 4){
        continue;
    }

    document.write(`<br> ${i}`);
}

document.write("<br> <br>");

//for in

let animales = ["gallina", "perro", "gato"];

for (animal in animales){
    document.write(animal + "<br>"); //enumera el indice del array
}
 document.write("<br>");

 //for of

 for (animal of animales){
    document.write(`${animal} <br>`); //dice las propiedades del array

 }

 let estudiantesUno = ["pedro", "patricio", "Morgan"];

 let estudiantesDos = ["andrea", "patricia", estudiantesUno];


forRancio: //sentencia label 
 for (estudiantes in estudiantesDos) { //recoremos los indices del segundo array
    if (estudiantes == 2){ //llega al 2 indice (el primer array) se ejecuta
        for (estudiantes of estudiantesUno){

            document.write(`${estudiantes} <br>`); //se imprime el primer array
        }
    } else { //cuando no se toma la condicion continua ejecutando el array dos
        document.write(estudiantesDos[estudiantes] + "<br><br>"); //propiedades del primer array
    }
 }


 //FUNCIONES

 function saludar(){
    respuesta = prompt(alert("Como estas?"));

    if (respuesta == "bien"){
        alert("que bueno");
    } else {
        alert("que mal")
    }
 }


 saludar(); //llamar la funcion


 //parametros

 function suma(num1, num2 /*define parametro*/){
    let resultado = num1 + num2;
    document.write(resultado);
    document.write("<br></br>");
 }

 suma(12, 22);

 //funcion saludar verdadera

 function saludarUno(nombreO){
    let frase = `¡Hola ${nombreO}!, ¿como estas?`;
    document.write(frase);
 }


 saludarUno(prompt(("Cual es tu nombre?")));

 // funciones flecha
 //const saludar = nombre => document.write(nombre);


 document.write("<br><br><br>");


 //solucion cofla

 let free = false;

 const validarClient = (time)=> {
    let edad = prompt("cual es tu edad?");

    if(edad > 18){
        if (time >= 2 && time < 7 && free == false){
            alert(`eres bienvenido, eres el primero en entrar a las ${time}:00Hs`);
            free = true
        } else {
            alert(`son las ${time}:00Hs podes pasar pero tienes que pagar la entrada`);
        }

    }else{
        alert("salí de aca hppp")
    }

 }

 validarClient(3);
 validarClient(2.5);
 validarClient(2.7);
 validarClient(4);
 validarClient(2);
 validarClient(0.2);


 //problema 2

 let cantidad = prompt("cuantos estudiantes hay?");
 let alumnosTotales = [];

 for(let i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("nombre del estudiante" + (i+1)), 0];
 }

 const Listado = (nombreE,p)=>{
    let presencia = prompt(nombreE);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
 }

 for(let i = 0; i < 30; i++){
    for(alumno in alumnosTotales){
    Listado(alumnosTotales[alumno][0], alumno)
    }
 }

 for(alumno in alumnosTotales){
    let resultadoUno = `${alumnosTotales[alumno][0]}: <br>
    ______Presencia: ${alumnosTotales[alumno][1]} <br>
    ______Ausencia: ${30 - alumnosTotales[alumno][1]}`;

    if (30 - alumnosTotales[alumno][1] > 18){
        resultadoUno+= `<b>Reprobaste por inasistencia</b>`
    } else {
       resultadoUno+= "<br></br>"
    }

    document.write(resultadoUno);

 } 


 //hacer una calculadora

 const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
 }

 const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
 }

 const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
 }

 const divir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
 }

alert("¿Que operación deseas realizar?");
let operacion = prompt("1: sumar 2: restar 3: multiplicar 4: dividir");

if (operacion == 1){
    let num1 = prompt("ingrese un numero");
    let num2 = prompt("ingrese otro numero");
    let realizar = suma(num1,num2);
    alert(`Tu operación da ${realizar}`);
}
else if (operacion == 2){
    let num1 = prompt("ingrese un numero");
    let num2 = prompt("ingrese otro numero");
    let realizar = resta(num1,num2);
    alert(`Tu operación da ${realizar}`);
}
else if (operacion == 3){
    let num1 = prompt("ingrese un numero");
    let num2 = prompt("ingrese otro numero");
    let realizar = multiplicar(num1,num2);
    alert(`Tu operación da ${realizar}`);
}
if (operacion == 4){
    let num1 = prompt("ingrese un numero");
    let num2 = prompt("ingrese otro numero");
    let realizar = divir(num1,num2);
    alert(`Tu operación da ${realizar}`);
} else {
    alert("NO SE A INGRESADO CORRECTAMENTE LA OPERACIÓN")
}