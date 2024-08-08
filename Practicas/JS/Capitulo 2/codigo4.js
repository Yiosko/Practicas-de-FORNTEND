

// ventana emergente de 'bienvenida'
alert("calculadora cofla");
alert("que operación deseas realizar?");
//ingresa que operación quieres
let operacion = prompt("1: sumar 2: restar 3: multiplicar 4: dividir");


//función la cual retorna el numero de la operación
const calcular = (num1,num2) => {

    if (operacion == 1){
        return parseInt(num1) + parseInt(num2);
    }
    else if (operacion == 2){
        return parseInt(num1) - parseInt(num2);
    }
    else if (operacion == 3){
       return parseInt(num1) * parseInt(num2);
    }
    else if (operacion == 4){
       return parseInt(num1) / parseInt(num2);
    }

    
}
//ingreso de numeros
let numeroUno = prompt("ingresa el primer numero");

let numeroDos = prompt("ingresa el segundo numero");

let resultado = calcular(numeroUno,numeroDos);
//imprime el resultado
alert(resultado)

