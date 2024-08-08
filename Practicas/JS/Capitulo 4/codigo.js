//Capitulo 4

// let cadena = "cadena de prueba";
// let cadenaDos = " cadena 2"

// //junta dos o más cadenas y retorna la cadena respuesta
// let respuesta = cadena.concat(cadenaDos);

// document.write(respuesta);

// let cadenaS = "cadena de prueba dos";
// let cadenaSDos = "cadena"
// // si la cadena segundaria es igual como empieza la cadena principal devuelve true
// let respuestaS = cadenaS.startsWith(cadenaSDos);

// //es lo mismo como la anterior pero finalizada
// //let respuestaS = cadenaS.endsWith();

// document.write(respuestaS);
// //esta sin importar inicio o final encuentra la palabra de la primera cadena(true) sino (false)
// let respuestaSDos = cadenaS.includes(cadenaSDos);
// //nos devuelve en indice de la cadena donde empieza la palabra
// let resultadoI = cadenaS.indexOf(cadenaSDos);
// //ese seria
// // cadenaS[0]

// //padstart coloca la cadena el numero de veces que pongamos en el indice faltante

// let resultadoP = cadenaS.padStart(24, "Hola ");
// //es lo mismo pero cadena se agrega al final
// //cadenaS.padEnd(#,"la")


// // document.write(resultadoP);
// // //repite las misma cadena las veces que se pongan #
// // let resultadoR = cadenaS.repeat(10)


// let cadena = "Hola Como Estas";
// // split separa la cadena como un array, siendo este un parametro para dividir en este caso " " el espacio
// let resultado = cadena.split(" ");

// //recorta una cadena segun el indice
// let resultadoDos = cadena.substring(0,3);

// //pone una cadena en minuscula
// let resultadoTres = cadena.toLowerCase(cadena)
// // cadena.toUpperCase() Todo en mayuscula

// let numero = 5;
// // convierte algo en cadena
// let resultadoCuatro = numero.toString();


// document.write(resultado[0]);
// document.write(resultadoDos);
// document.write(resultadoTres);
// document.write(resultadoCuatro);

// ______________metodos en array________________________

let nombre = ["jorge", "bambie", "camerun "];
document.write(nombre + "<br>");
// // elimina el ultimo elemento del array y lo muestra
let resultadoArray = nombre.pop();
document.write("<br>" + resultadoArray + "<br>");

// //elimina el pirmer elemento del array
let resultadoArrayDos = nombre.shift();
document.write(resultadoArrayDos + "<br>");

// //agrega un elemento al array
let resultadoArrayTres = nombre.push("Diego");
document.write(nombre);


// let numeroArray = [1,2,3,4,5];
// //invierte el orden del array
// let resultadoArrayCuatro = numeroArray.reverse();
// document.write("<br>" + numeroArray + "<br>");

// //ordena el array (a-z)
// let resultadoArrayCinco = numeroArray.sort();
// document.write(resultadoArrayCinco + "<br>");

// // elimina un rango y remplaza
// let resultadoArraySeis = numeroArray.splice(1,2);
// document.write(resultadoArraySeis);

document.write("<br><br><br>")

// ________________Accesores____________________________

let frutas = ["Manzana","Banano","Peras"];
document.write(frutas + "<br>");

// // convierte al array en cadena y los separa por lo que se ingrese
let resultadoFruta = frutas.join("<br>Elemento: ");
document.write(`Elemento: ${resultadoFruta}`);

// //slice muestra solamente los items de un array en un rango predeterminado
let resultadoFrutaDos = frutas.slice(0,2);
document.write("<br>" + resultadoFrutaDos);


// _____________________repetidores_____________________________________

 //filter
 //crea un nuevo array con todos los elementos que cumplan la condición

 let frutasDelis = ["manzana", "pera", "piña", "guanabana", "arandanos"];

 let resultado = frutasDelis.filter(fruta => fruta.length > 4); // se eliminan los elementos que tengan menos de 4 letras

 console.log(resultado);

 document.write(resultado);

