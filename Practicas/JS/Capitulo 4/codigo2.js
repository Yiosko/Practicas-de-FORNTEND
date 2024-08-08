
// objeto math basico

// _______________________Metodos__________________________
//sqrt
//la raiz cuadrada de un numero
let numero = Math.sqrt(25);
document.write("raiz cuadrada de 25: " + numero + "<br>");

//tambien reiz cubica
let numeroDos = Math.cbrt(27);
document. write(`raiz cubica de 27: ${numeroDos} <br>`);

//imprime el numero más grande
let grupoNumero = Math.max(2,24,30,100,12);
document.write(`el numero más grande es: ${grupoNumero} <br>`);

//imprime el numero más pequeño

let grupoNumero2 = Math.min(1,23,12,100,15);
document.write(`El numero más pequeño es: ${grupoNumero2} <br>`);

//imprime un numero pseudo-random entre 0 y 1
let randomNumb = Math.random();
document.write(`numero random entre 0 y 1: <b>${randomNumb}</b> <br>`);
//numero random entre 0 y 100
let numeroRandom = Math.random()*99 // random hasta 99
let numeroLoco = Math.floor(numeroRandom + 1); //hace que no te toque 0

document.write(`numero aleatorio desde 1 al 100:  <b>${numeroLoco}</b> <br>`);

//redondear
let numeroredondeado = Math.round(4.21);
document.write(`el numero redondeado de 4.21 es: ${numeroredondeado} <br>`)