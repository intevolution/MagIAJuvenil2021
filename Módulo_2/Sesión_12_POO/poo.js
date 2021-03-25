//Código de la Sesión #12 del Módulo 2

//Para ejecutar este programa debemos poner en consola:
//node poo.js 

//Tema ----> Programación orientada a objetos

//Importante - Si queremos utilizar la funcionalidad prompt
//tenemos que poner la siguiente instrucción
const prompt = require('prompt-sync')();

// Estructura para la creación de un objeto 
// variable = { nombreCaracterística: Valor }

//Creación de un objeto con nombre "celularRojo"
var celularRojo = {
    //Este objeto cuenta con ciertas características
    //Para escribir las características ponemos --> nombreCaracterística: valor
    color: "Rojo",
    peso: "80 g",
    numCamaras: 3,
    sistema: "Android",
    duracionBateria: 24 
}
//Creación de un objeto con nombre "celularAzul"
var celularAzul = {
    color: "Azul",
    peso: "80g"
}
//Creación de un objeto con nombre "celularVerde"
var celularVerde = {
    color: "verde",
    peso: "80g"
}

//Obtenemos el valor de una característica,
//para esto se puede hacer de 2 formas distintas
//Forma 1 - Obtener el valor de la característica "número de cámaras"
//console.log( celular.numCamaras );
//Forma 2 - Obtener el valor de la característica "número de cámaras"
//console.log( celular[ "numCamaras" ] );

//Creación de una clase
//Una clase es una plantilla para la creación de objetos
//nos ayuda a poder crear objetos sin la necesidad de 
//volver a escribir todas las características
class galleta{
    //utilizamos la palabra reservada "cosntructor" para definir
    //las características y el estado inicial de los objetos a crear
    constructor( tamaño, forma, sabor ){
         //La palabra reservada "this" nos ayuda a separar el nombre de
         //la caradcterística y el nombre del parámetro
         this.tamaño = tamaño;
         this.forma = forma;
         this.sabor = sabor;    
    }
}

//Obtenemos los valores de las caractectísticas de un objeto desde consola
var tamaño = prompt( "Dame el tamaño de la galleta: " );
var forma = prompt( "Dame la forma de la galleta: " );
var sabor = prompt( "Dame el sabor de la galleta: " );

//Para crear nuestro nuevo objeto tenemos que llamar a la clase "galleta"
//Ingresamos los valores obtenidos como parámetros en nuestro nuevo objeto
let galletaChocolate = new galleta( tamaño, forma, sabor );
//var galletaVainilla = new galleta( "3 cm", "Circulo", "Vainilla" );

//Imprimimos el contenido del objeto "galletaChocolate"
console.log( galletaChocolate );
//console.log( galletaVainilla );

//Si queremos ver una característica en específico, utilizamos
//alguna de las 2 formas descritas anteriormente
console.log( galletaChocolate.sabor );
//console.log( galletaVainilla[ "sabor" ]);


//Comparación con objetos
var frutaN1 = { nombre: "manzana" }
var frutaN2 = { nombre: "manzana" }

//Caso N1 - Comparar 2 objetos con el mismo contenido
//Aunque estos 2 objetos tienen el mismo contenido,
//cuando utilicemos el operador de igualdad, dará como
//resultado "Falso", porque no son el mismo objeto.
var resultado = ( frutaN1 == frutaN2 );
console.log( resultado );

//Caso N2 - Comparar 2 objetos pero uno de ellos recibe el contenido de otro
//Aqui no hay problema, ya que lo que se guarda es la referencia al objeto
//y si los 2 tienen la misma referencia, dará un resultado "True" o "Verdadero"
//OJO ----- Esto solo pasa con los Objetos
var frutaN3 = frutaN1;
var resultadoN2 = ( frutaN3 == frutaN1 );
console.log( resultadoN2 );

