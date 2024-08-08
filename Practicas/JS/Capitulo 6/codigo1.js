

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
