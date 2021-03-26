//Código de la Sesión #13 del Módulo 2

//Para ejecutar este programa debemos poner en consola:
//node descomposicion.js 

//Tema ----> Descomposición de Objetos

//La descomposición de un objeto consiste en obtener características
//en específico y guardarlas en variables sin la necesidad de 
//escribir muchas líneas de código.

//Objeto que representa a una persona
let persona = { nombre: "Omar", apellido: "Guerrero", edad: 20 }
//Ejemplo de descomposición del objeto persona
//Caso #1 - Una descomposición sencilla
let { nombre, apellido } = persona;
//Los valores de nombre y apellido se guardan en sus respectivas variables declaradas
console.log( "El nombre del participantes es: " + nombre + " " + apellido );

//Si no queremos realizar la descomposición, tendremos
//que obtener sus características de forma individual 
//y con más líneas de código.
var nombreN2 = persona.nombre;
var apellidoN2 = persona.apellido;

//Ejemplo #2 - Descomposición sencilla
let celular = { color: "Rojo", numCamaras: 4 }
//Obtenemos la característica color y guardamos en su respectiva variable
let { color } = celular;
console.log( color );

//Ejemplo #3 - Descomposición separada de la declaración de las variables
//Declaración del objeto paquete
var paquete = {
    numEnvio: 323242,
    direccion: "Calle rio de plata",
    peso: "3kg"
}
//Declaración de las variables donde guardaremos las características
var numEnvio, peso;
//Descomposición del objeto paquete
({ numEnvio, peso } = paquete);
console.log( numEnvio );

//Ejemplo #4 - Descomposición de un objeto con valores por defecto
//Consiste en asignar valores en el caso que el objeto no cuente con
//una cierta característica.

//Una declaración no cuenta con apellido, el resultado será:  Omar Lopez 
//let persona2 = { nombreN2: "Omar", edad:20 }
//Esta otra declaración si cuenta con apellido, por lo tanto el resultado será: Omar Guerrero
let persona2 = { nombreN2: "Omar", apellido: "Guerrero", edad:20 }
var { nombreN2, apellido: apellidoN3 = "Lopez" } = persona2;
console.log( "El nombre es: " + nombreN2 + " " + apellidoN3 );


//Ejemplo #5 - Descomposicion en funciones
//Nos sirve para los casos donde el valor a introducir 
//será un objeto y no queremos estar escribiendo sus 
//características de forma individual para ingresarlos
//en los parámetos de la función.

//Objeto envio
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
