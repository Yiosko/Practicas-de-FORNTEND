alert("cofla capitulo 3")
// clase que construye los celulares
class Smartphone{
    //cualidades del objeto
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    //metodo o funcion que realiza el objeto (celular)
    //boton de encendido
    precionarBotonEncendido(){
        if (this.encendido == false){
            alert("celular encendido");
            this.encendido = true;

        }else {
            Apagado();
            this.encendido == false;
        }
    }
    //proceso de reinicio
    reiniciar(){
        if(this.encendido == true){
            alert("el celular se a reiniciado");
        } else {
            Apagado();
        }
    }
    //proceso para capturar imagen
    tomarFoto(){
        if(this.encendido == true){
            alert(`se a tomado una foto en ${this.resolucionDeCamara}`);
        }else {
            Apagado();
        }
    }
    //proceso para grabar video
    grabarVideo(){
        if(this.encendido == true){
            alert(`se esta grabando en ${this.resolucionDeCamara}`)
        }else {
            Apagado()
        }
    }
    //metodo que rotarna la informacion de los objetos
    mobileInfo(){
        return `
        Color: <b> ${this.color} </b> <br>
        Peso: <b> ${this.peso} </b> <br>
        Tamaño: <b> ${this.tamaño} </b> <br>
        Resolucion de camara: <b> ${this.resolucionDeCamara} </b> <br>
        memoria ram: <b> ${this.memoriaRam} </b> <br>
        `;
    }
}
//clase de herencia de celulares pero de alta gama
class SmartphoneAltaGama extends Smartphone {
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    //proceso para grabar video en camara lenta
    grabarVideoLento(){
        if(this.encendido == true){
            alert(`se esta grabandoi en camara lenta, resolucion: ${this.resolucionDeCamaraExtra}`);
        }else {
            Apagado();
        }
    }
    //proceso para reconocimiento facial
    reconocimientoFacial(){
        if(this.encendido == true){
            alert(`se inicio proceso de reconocimiento facial`);
        } else {
            Apagado();
        }
    }
    //información más caracteristicas de alta gama
    infoAltaGama(){
        return `${this.mobileInfo()} Camara Extra: <b>${this.resolucionDeCamaraExtra}</b> <br>`
    }
}
// función para cuando esta apagado el celular y para cuando se va a apagar
const Apagado = () =>{
    return alert("el celular esta apagado");
}
//creacion de los primeros celulares
const celularUno = new Smartphone("negro","100g","5'","hd","15gb");
const celularDos = new Smartphone("balco","110g","5.4'","full hd","25gb");
const celularTres = new Smartphone("negro","140g","5.9'","full hd","64gb");
//creacion de celulares de alta gama
const celularUltraUno = new SmartphoneAltaGama("negro","130g","5.3'","4k","124gb","full hd");
const celularUltraDos = new SmartphoneAltaGama("Gris","120g","5.4'","4k","158gb","full hd");

// celularUno.precionarBotonEncendido();
// celularUno.tomarFoto();
// celularUno.reiniciar();
// celularUno.grabarVideo();
// celularUno.precionarBotonEncendido();


//que se muestre en la pagina las cualidades de los celulares
document.write(
    `${celularUno.mobileInfo()} <br>
    ${celularDos.mobileInfo()} <br>
    ${celularTres.mobileInfo()} <br>
    ${celularUltraUno.infoAltaGama()} <br>
    ${celularUltraDos.infoAltaGama()} <br>`
);
// clase que construye las aplicaciones
class App {
    constructor(descarga,puntuacion,peso){
        this.descarga = descarga;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.instalada = false;
        this.abierta = false;
    }
    //proceso de instalar aplicación
    instalar(){
        if(this.instalada == false && this.abierta == false){
            alert("la aplicació se a instalado");
            this.instalada = true;
        }else {
            alert("La aplicación ya esta instalada");
        }
    }
    //proceso para abrir aplicación
    abrir(){
        if(this.instalada == true && this.abierta == false){
            alert("la aplicacion se a abierto");
            this.abierta = true;
        } else {
            alert('la aplicación no esta instalada');
        }
    }
    //proceso para cerrar app
    cerrar(){
        if(this.instalada == true && this.abierta == true){
            alert("las aplicación se esta cerrando");
            this.abierta = false;
        }else{
            alert("la aplicación ya esta cerrada")
        }
    }
    //proceso para desinstalar
    desinstalar(){
        if(this.instalada == true){
            alert("desinstalando aplicación");
            this.instalada == false;
            this.abierta == false;
        } else {
            alert("aplicación no esta instalada");
        }
    }

    appinfo(){
        return`
        Descargas: <b>${this.descarga}</b> <br>
        Puntuación: <b>${this.puntuacion}</b> <br>
        Peso: <b>${this.peso}</b> <br>
        `
    }
}

const CodMobile = new App("1 milion", "5 estrellas", "2gb");
const app2 = new App("12.000","5 estrellas","500mb");
const app3 = new App("5.000","5 estrellas","700mb");
const app4 = new App("25.000","4 estrellas","1gb");
const app5 = new App("18.000","3 estrellas","2.5mb");
const app6 = new App("4.000","3.5 estrellas","50mb");
const app7 = new App("2.000","2 estrellas","5mb");

CodMobile.instalar();
CodMobile.abrir();
CodMobile.cerrar();
CodMobile.desinstalar();    
 
document.write(`
    ${CodMobile.appinfo()} <br>
    ${app2.appinfo()} <br>
    ${app3.appinfo()} <br>
    ${app4.appinfo()} <br>
    ${app5.appinfo()} <br>
    ${app6.appinfo()} <br>
    ${app7.appinfo()} <br>
    `);