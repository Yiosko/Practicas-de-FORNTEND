

const tituloUno = document.querySelector(".titulo");
tituloUno.setAttribute("contentEditable","true"); // editar el texto

const tituloDos = document.querySelector(".tituloDos");
tituloDos.setAttribute("dir","rtl"); //direccion del texto

const tituloTres = document.querySelector(".tituloTres");
tituloTres.setAttribute("tabIndex","0"); //selector del elemento

const tituloCuatro = document.querySelector(".tituloCuatro");
tituloCuatro.setAttribute("title","El que lo lea es gay"); //ventana emergente

const inputNormal = document.querySelector(".input-normal");
inputNormal.minLength = 8; //minimo 8 caracteres
inputNormal.placeholder = "Matame" //mensajito del input}
inputNormal.required = " "; //es necesario llenar este campo

//Obtener ELEMENTOS

const textCreate = document.querySelector(".text-create");
document.write(`Ejemplo: ${textCreate.textContent}<br>`);

const innerHTMLCreate = document.querySelector(".innerHTML-create");
document.write(`Ejemplo: ${innerHTMLCreate.innerHTML} <br>`);

//crear objetos

const container = document.querySelector(".container-parent");
const item = document.createElement("LI");

document.write(`se crea el elemento li: ${item}`);

//Pero si queremos generar un hijo dentro del nodo
//_________________Manera objeto text
// const childItem = document.createTextNode("ElementOfTheList");

// item.appendChild(childItem);
// console.log(item);

//ingresar en el contenedor



//__________Manera texto

item.innerHTML = "ElementOfTheList";


// forma no practica de realizar varios elementos dentro del container
// for (let n = 0; n < 10 ; n++) {
//     const item = document.createElement("LI");
//     item.innerHTML = "ElementOfTheList";
//     container.appendChild(item)
// }

//forma practica de hacerlo

const fragmento = document.createDocumentFragment();

for (let i = 0; i < 5; i++) {
    const item = document.createElement("LI");
    item.innerHTML = "ElementOfTheList";
    fragmento.appendChild(item);
}

container.appendChild(fragmento);
