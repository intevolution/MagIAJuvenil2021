//Código de la Sesión 2 del Módulo 2
//Tipos de datos

//Para ejecutar este programa debemos poner en consola:
//node tiposDatos.js

//Tipo de dato "Number" - Números
//Ejemplo - Declarar 2 variables que contengan un número 
var numero1 = 5;
var numero2 = 1500;

//Tipo de dato "String" - Texto
//Ejemplo - Declarar 2 variables que contengan un texto
var texto1 = "Bicicleta";
var texto2 = "Bienvenido al curso";

//Tipo de dato "Boolean" - Valor verdadero o falso
//Ejemplo - Declarar 2 variables que contenga un valor Boolean( verdadero o falso )
var booleanoVerdadero = true;
var booleanoFalso = false;

//Tipo de dato "Null" - Valor vacio
//Ejemplo - Declarar una variable que contenga un valor vacío
var condicion = null;

//Tipo de dato "Undefined" - Variable que todavía no tienen ningún valor asignado
//Ejemplo - Declarar una variable que no tenga un valor asignado 
var sinValor;
console.log( sinValor );

//Tipo de dato "Array" - Colección de valores
//Ejemplo - Declarar 3 constantes que contengan valores numéricos o texto 
const arregloNumeros = [ 5000, 4200, 10, 30, 15, 10000 ];
const arregloNombres = [ "Luis", "Erick", "Diego", "Ana"];
const arregloMixto = [ 500, "Luis", 10, "Erick" ];

//Tipo de dato "Object" - Objeto( Entidad de la vida real )
//Ejemplo - Con base en las características de una persona 
//descritas en el programa "tiposDeclaración.js", se
//hará su representación a objeto, esto consiste en
//guardar sus características dentro de una unica variable.

//Objeto persona
var persona = { 
    nombre: "Diego",
    apellidoPaterno: "Perez",
    apellidoMaterno: "Dominguez",
    edad: 15,
    lugarNacimiento: "México" 
}
