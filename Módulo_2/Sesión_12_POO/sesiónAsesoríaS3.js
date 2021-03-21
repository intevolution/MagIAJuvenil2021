//Código de la Sesión de la asesoría #3 del Módulo 2

//Para ejecutar este programa debemos poner en consola:
//node sesiónAsesoríaS3.js

//Llamamos a la funcionalidad prompt
const prompt = require('prompt-sync')();
//Obtenemos un valor desde consola
var mensaje = prompt( "Ingresa un mensaje: " );
//Al saber que el valor será un número y si queremos trabajar con ese número utilizamos 
//la función "parseInt" para que el valor recibido como texto se convierta a entero
console.log( parseInt(mensaje) );

//Si queremos hacer lo contrario, convertir un entero a texto
//no utilizaremos una función, si no que será un método llamado "toString"
var numero = 25;
console.log( numero.toString() );
