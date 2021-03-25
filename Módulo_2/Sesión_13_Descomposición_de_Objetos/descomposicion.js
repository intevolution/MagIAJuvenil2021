//Código de la Sesión #13 del Módulo 2

//Para ejecutar este programa debemos poner en consola:
//node descomposicion.js 

//Tema ----> Descomposición de Objetos

let persona = { nombre: "Omar", apellido: "Guerrero", edad: 20 }
//Con descomposición
//Caso #1
let { nombre, apellido } = persona;
console.log( "El nombre del participantes es: " + nombre + " " + apellido );

//Sin descomposición
var nombreN2 = persona.nombre;
var apellidoN2 = persona.apellido;

//Ejemplo #2
let celular = { color: "Rojo", numCamaras: 4 }
let { color } = celular;
console.log( color );

//Descomposición de objetos - Ejemplo #3
//Caso #2
var paquete = {
    numEnvio: 323242,
    direccion: "Calle rio de plata",
    peso: "3kg"
}
var numEnvio, peso;
({ numEnvio, peso } = paquete);
console.log( numEnvio );

//Descomposición de objetos
//Valores por defecto
let persona2 = { nombreN2: "Omar", edad:20 }
var { nombreN2, apellido: apellidoN3 = "Lopez" } = persona2;
console.log( "El nombre es: " + nombreN2 + " " + apellidoN3 );


//Descomposicion en funciones
let envio = {
    numEnvio: "337",
    producto: "Videojuego"
}

//La descomposición se realiza en los parámetos de la función
function datoEnvio( { numEnvio, producto } ){
    console.log( "Numero de envio: " + numEnvio );
    console.log( "Producto a enviar: " + producto);
}
//Al llamar a la función pasamos el objeto dentro de los paréntesis
datoEnvio( envio );
