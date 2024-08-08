
//Genera una alerta en la pagina
alert('Hola');
//una ventana de alerta con un input
prompt("alerta que abre imput y devuelve un valor");

// se puede guardar el dato en una variable

let nombre = prompt("cual es tu nombre?");
//se imprime en la pagina "Hola nombre (diego)"
    document.writeln("Hola " + nombre);


// Ejercicio cofla

dineroCofla = prompt("cuanto dinero tiene cofla : ");
dineroPedro = prompt("cuanto dinero tiene Pedro : ");
dineroRoberto = prompt("cuanto dinero tiene Roberto : ");

dineroCofla = parseInt(dineroCofla);

//Lo que puede comprar Cofla

if (dineroCofla >= 0.6 && dineroCofla < 1){
    alert("te podes comprar la paleta de agua");
    alert("y te sobra " + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6){
    alert("te podes comprar la helado de crema");
    alert("y te sobra " + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("te podes comprar la heladix");
    alert("y te sobra " + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("te podes comprar la heladovich");
    alert("y te sobra " + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("te podes comprar el helardo");
    alert("y te sobra " + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9){
    alert("te podes comprar el bote de helado");
    alert("y te sobra " + (dineroCofla - 2.9));
}
 else {
    alert("No hay un helado de ese precio");
 }

//lo que puede comprar pedro

 if (dineroPedro >= 0.6 && dineroPedro < 1){
    alert("te podes comprar la paleta de agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6){
    alert("te podes comprar la helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("te podes comprar la heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("te podes comprar la heladovich");
}
else if (pedineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("te podes comprar el helardo");
}
else if (dineroPedro >= 29){
    alert("te podes comprar el bote de helado");
}
 else {
    alert("No hay un helado de ese precio");
 }

 //lo que puede comprar Roberto

 if (dineroRoberto >= 0.6 && dineroRoberto < 1){
    alert("te podes comprar la paleta de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert("te podes comprar la helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("te podes comprar la heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("te podes comprar la heladovich");
}
else if (pedineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("te podes comprar el helardo");
}
else if (dineroRoberto >= 29){
    alert("te podes comprar el bote de helado");
}
 else {
    alert("No hay un helado de ese precio");
 }