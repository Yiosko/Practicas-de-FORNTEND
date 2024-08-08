
// ventana emergente de 'bienvenida'
alert("calculadora cofla");
alert("que operación deseas realizar?");
//ingresa que operación quieres
let operacion = prompt("1: sumar 2: restar 3: multiplicar 4: dividir 5: potenciar 6: raizCuadrada 7: raizCubica");


//función la cual retorna el numero de la operación
class Calculadora {
    constructor () {
    }

    calcular(num1,num2) {

    if (operacion == 1){ // suma
        return parseInt(num1) + parseInt(num2);
    }
    else if (operacion == 2){ // resta
        return parseInt(num1) - parseInt(num2);
    }
    else if (operacion == 3){ //multiplicacion
       return parseInt(num1) * parseInt(num2);
    }
    else if (operacion == 4){ //divición 
       return parseInt(num1) / parseInt(num2);
    }

    else if (operacion == 5) { //potencia
        return parseInt(num1) ** parseInt(num2)
    }

    else if (operacion == 6) { //raiz cuadrada
        return Math.sqrt(num1)
    }

    else if (operacion == 7) { //raiz cubica
        return Math.cbrt(num1)
    }

   
}
}

let calculadora = new Calculadora();

//ingreso de numeros
if (operacion <= 5) {
let numeroUno = prompt("ingresa el primer numero");

let numeroDos = prompt("ingresa el segundo numero");
let resultado = calculadora.calcular(numeroUno,numeroDos);
alert(resultado)

} else {
let numeroUno = prompt("ingresa el numero a radicar");
let resultado = calculadora.calcular(numeroUno);
alert(resultado)
}

