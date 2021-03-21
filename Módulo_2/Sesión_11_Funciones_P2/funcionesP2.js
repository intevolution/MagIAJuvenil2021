//Código de la Sesión #11 del Módulo 2

//Para ejecutar este programa debemos poner en consola:
//node funcionesP2.js 

//Tema ----> Funciones Parte 2

//Ejercicio 
//Escribir un programa que obtenga el precio de un producto, y calcule el 
//precio total, ya que también se va a cobrar el costo de envio únicamente
//si el precio del producto es menor o igual a $399.

//Declaramos 2 variables, una con el nombre del producto y otra con el precio
var nombreProducto = "Oso de peluche";
var precioProducto = 300;

//Declaramos una función que debamos ingresar 2 parámetros
function precioTotal( precio, nombreProducto ){
    //Declaramos una variables en 0 que contendrá al resultado 
    var resultado = 0;
    //Comparamos, si el valor del producto es igual o menor a 399,
    //se cobrará el costo de envio
    if( precio <= 399 ){
        //Imprimiremos una factura con toda la información del costo
        console.log( "Factura" );
        console.log( "Costo del " + nombreProducto + " es: " + precio);
        console.log( "Costo envio: 100" );
        resultado = precio + 100;
        console.log( "El total a pagar es: " + resultado ); 
    }
    //Comparamos, si el valor del producto es mayor a 399, no se cobrará el costo de envio
    else if( precio > 399 ){
        resultado = precio;
        //Imprimimos el costo a pagar
        console.log( "El total a pagar es: " + resultado );
        //Implementar la impresión de la factura para este caso
    }
}
//Llamada a esta función
//precioTotal( precioProducto, nombreProducto );
//precioTotal( 500, "Libro" );

//Ambito de una función
//Límites en donde podemos acceder a nuestra variables

//Ámbito de una variable para la declaración con var
function ambitoVar(){
    //Bloque de instrucciones N1
    const i = 1;
    if ( i == 1 ){
        //Bloque de instrucciones N2
        var variableVar = "Ambito de variable";
    }
    console.log( variableVar );
}
//Llamada a esta función
//ambitoVar();
//console.log( variableVar ); --> Error

//let nombre = "Luis";
//nombre = "Pablo";
//console.log( nombre );

//Ámbito de una variable para la declaración con let
function ambitoLet(){
    //Bloque de instrucciones N1
    const i = 1;
    if( i == 1 ){
        //Bloque de instrucciones N2
        let variableLet = "Ambito de variable - Let";
        console.log( variableLet );
    }   
}
//ambitoLet();
//console.log( variableLet );

//Caso en donde una variable global se llama igual que una variable local
//Variable Global
var mensaje = "texto";
//Declaración de función de ejemplo
function mensajeFuncion(){
    //Variable Local
    var mensaje = "Texto 2";
    console.log( mensaje );
}
//Impresión de la variable "mensaje" antes y después de llamar a la función 
console.log( mensaje );
mensajeFuncion();
console.log( mensaje );
