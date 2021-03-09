//Código de la Sesión 3 del Módulo 2
//Operadores

//Para ejecutar este programa debemos poner en consola:
//node operadores.js

//En la sesión solo se vieron los operadores más representativos de cada tipo,
//si quieres ver la lista completa de operadores, en la grabación de la sesión 3 
//podrás encontrar mucha más información.

//----------------Operadores Aritméticos----------------
//Operador "+"
var operandoN1 = 5000;
var operandoN2 = 15000;
//Ejemplo - Suma de 2 números e impresión del resultado
var resultado = operandoN1 + operandoN2;
console.log( resultado );

//Operador "*"
var operandoN3 = 12;
var operandoN4 = 2;
//Ejemplo - Multiplicación de 2 números e impresión del resultado
var resultado2 = 12 * 2;
console.log( resultado2 );

//Operador "/"
//Ejemplo - División de 2 números e impresión del resultado
var resultado3 = operandoN2 / operandoN1;
//console.log( resultado3 );
//Utilizamos la "concatenación" para tener un resultado más completo y no solo el número
console.log("El resultado de tu división es: " + resultado3);

//Operador "++"
//Ejemplo - Hacer que un valor, aumente su valor en 1 e imprimirlo
resultado3++;
console.log("Incrementando la variable resultado3: " + resultado3 );


//----------------Operadores de asignación----------------
//Operador "="
//Ejemplo - Sustituir el valor de una variable por el de otra e imprimir el resultado
operandoN1 = operandoN2;
console.log( "El valor del operando1 será: " + operandoN1 );

//Operador "+="
//Ejemplo - Forma completa para sumar 2 valores que se encuentran en variables y guardarlos en una de esas variables
//operandoN3 = operandoN3 + operandoN4;
//Ejemplo - Forma resumida para sumar 2 valores que se encuentran en variables y guardarlos en una de esas variables  
operandoN3 += operandoN4;
console.log( "Resultado de sumar el operando4 y asignar el resultado al operando3: " + operandoN3 );

//----------------Operadores de comparación----------------
var nComparacion1 = 5;
var nComparacion2 = "5";
var nComparacion3 = 10;

//Operador "==" ---> Si el primer valor es igual al segundo valor, 
//dará como resultado un "true", de lo contrario será "false"

//Ejemplo - Crear una condición con el operador "==" e imprimir el resultado
var resultadoComparacion1 = ( nComparacion1 == nComparacion2 );
console.log( "Resultado de la primera comparación: " + resultadoComparacion1 );

//Operador "===" ---> Si el primer valor es igual al segundo valor y son del mismo tipo de dato, 
//dará como resultado un "true", de lo contrario nos será "false"

//Ejemplo - Crear una condición con el operador "===" e imprimir el resultado
var resultadoComparacion2 = ( nComparacion1 === nComparacion2 );
console.log( "Resultado de la segunda comparación: " + resultadoComparacion2 );

//Operador ">" ---> Si el primer valor es mayor que el segundo valor, 
//dará como resultado un "true", de lo contrario será "false"

//Ejemplo - Crear una condición con el operador ">" e imprimir el resultado
var resultadoComparacion3 = ( nComparacion3 > nComparacion1 );
console.log( "Resultado de la tercera comparación: " + resultadoComparacion3 );
