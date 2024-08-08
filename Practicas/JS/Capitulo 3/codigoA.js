class Animal {
    constructor(especie,edad,color/*Parametros*/){
        this.especie/*crea un atributo*/ = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy ${this.color}`;
    }

    //esto es un metodo, es una funcion pero dentro de una clase.
    verInfo (){
        document.write(`${this.info} <br>`)
    }
}

//HERENCIA

class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    //metodo de una herencia
    static ladrar(){
        alert("¡Guau!");
    }

    // setterm una propiedad

    set modificarRaza(newName){
        this.raza = newName;
    }

    get getRaza(){
        return this.raza;
    }
}

//instanciar un objeto

const perro = new Perro ("perro",5,"marrón", "Salchicha");
const gato = new Animal("gato",2,"negro");

perro.verInfo();
gato.verInfo();

//ladrar perro 

// perro.ladrar(); cuando el metodo no es estatico y esta dentro de la clase animal

//llamar metodo static

Perro.ladrar();

//llamar set
perro.modificarRaza = "pedriño";

document.write(perro.raza);

document.write(perro.getRaza);
