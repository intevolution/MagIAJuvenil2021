//Código de la Sesión 7 del Módulo 2
//Arreglos parte 1

//Para ejecutar este programa debemos poner en consola:
//node arreglosP1.js

//Tema --------> Arreglos

//Arreglo que contiene nombres de personas
var arregloNombres = [ "Luis", "Diana", "Omar", "Paola" ];

//Accedemos a un elemento del arreglo
console.log( arregloNombres[2] );

//Sustituimos un elemento del arreglo en una posición en específico
arregloNombres[2] = "Rosa";
console.log( arregloNombres[2] );

//Borramos un elemento del arreglo en una posición en específico
//OJO, solo borra el elemento, pero se quedará como elemento vacío
delete arregloNombres[2];
console.log( arregloNombres );

//Tema --------> Métodos de arreglos

//Separamos un mensaje que queremos desplegar en pantalla,
//lo hacemos con la división del texto en textos más pequeños
//utilizando el operador de concatenación "+" y
//obtenemos la cantidad de elementos de un arreglo.
console.log("La cantidad de elementos" + " en el arreglo es: " + arregloNombres.length );

//Agregamos un elemento al final del arreglo
arregloNombres.push( "Cristina" );
console.log( arregloNombres );

//Enlace de la documentación que muestra todos los métodos de arreglos
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
//En esta página encontrarás muchos métodos con los que podrás practicar tus habilidades en programación



//Borramos un elemento al final del arreglo
arregloNombres.pop();
console.log( arregloNombres );

//Agregamos un elemento al arreglo en una posición en específico
arregloNombres.splice( 0, 1, "Cristina" );
console.log( arregloNombres );

//Borramos un elemento del arreglo en una posición en específico
arregloNombres.splice( 1, 2 );
console.log( arregloNombres );

//Ejercicio
//Realizar un programa que lea por 
//teclado 5 notas/calificaciones 
//y muestre el promedio de estas.

//Utilizamos la funcionalidad prompt
const prompt = require('prompt-sync')();

//Declaramos un arreglo vacío
//Tiene que estar vacío ya que para guardar un valor en el arreglo
//lo tenemos que hacer una posición a la vez.
var calificaciones = [];

//Con la funcionalidad prompt guardamos 5 elementos en el arreglo
//cada elemento en una posición distinta
calificaciones[0] = prompt( "Dame la primera calif: " );
calificaciones[1] = prompt( "Dame la segunda calif: " );
calificaciones[2] = prompt( "Dame la tercera calif: " );
calificaciones[3] = prompt( "Dame la cuarta calif: " );
calificaciones[4] = prompt( "Dame la quinta calif: " );

//Cuando queremos sacar el promedio con la siguiente instrucción
//tenemos un problema, muestra un resultado erróneo
/*
var resultado = ( calificaciones[0] + 
calificaciones[1] + 
calificaciones[2] + 
calificaciones[3] + 
calificaciones[4] ) / 5;
*/

//Para tratar este error, haremos paso a paso el procedimiento para guardar
//los valores, sumarlos y dividirlos entre 5 para obtener el promedio.

//Guardamos cada una de las calificaciones dentro de una variable,
//como son 5 calificaciones, se guardarán en 5 variables.
var calif1 = calificaciones[0];
var calif2 = calificaciones[1];
var calif3 = calificaciones[2];
var calif4 = calificaciones[3];
var calif5 = calificaciones[4];

//En la variable resultado guardamos la suma de las 5 variables
//Aqui identificamos un error, ya que si no los convertimos a enteros
//el valor de la variable resultado dará un numero sumamente grande.
//Es por eso que utilizamos parseInt() para convertir 
//a todas las variables en enteros y evitarnos algun conflicto.
var resultado = parseInt(calif1) + parseInt(calif2) 
+ parseInt(calif3) + parseInt(calif4) + parseInt(calif5);

//Con el resultado correcto, procedemos a dividir este resultado entre 5,
//Algo a tomar en cuenta es que podemos utilizar un operador para
//evitar poner ---> resultado = resultado / 5
resultado /= 5;
//Imprimimos el promedio de las 5 materias
console.log( resultado );

//Concatenamos todos los valores de estos 2 arreglos
var concatenaN1 = [ "Hola", "Buenas", "Tardes"];
var concatenaN2 = [ "Adios", "Buenas", "Noches" ];
//Utilizamos el método concat para concatenar los 2 arreglos 
//y a su vez, imprimimos el resultado final.
console.log( concatenaN1.concat( concatenaN2 ) );
