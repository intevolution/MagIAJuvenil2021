//Código de la Sesión #16 del Módulo 2

//Para ejecutar este programa debemos poner en consola:
//node funcAsincP2.js

//Tema ----> Funciones Asíncronas Parte 2

/*
//Ejemplo para comprender mejor las funciones asíncronas 

//Imprimimos el mensaje "Hola" 
console.log( "Hola" );
//Esperamos 4 segundos, simula el tiempo en el que 
//nos da una respuesta un servicio externo, el cual
//no sabemos cuando nos la dará
setTimeout( function timeout() {
    console.log( "Mundo" );
}, 4 * 1000 );
//Imprimimos un mensaje final
console.log( "Hola a los participantes" );
*/
//El resultado de la ejecución es el siguiente:
//Hola
//Hola a los participantes
//Mundo

//¿Por qué se imprime antes la última línea de código antes que la función?
//Esto pasa porque mientras se está esperando ese tiempo ( 4 segundos), se siguen
//ejecutando instrucciones y por último se ejecutará console.log( "Mundo" )

//Usamos una función callback o "llamada de regreso"
//¿En qué consiste?
//Primero se ejecutará una función, una vez ejecutada esa función, 
//se ejecutará la función callback, por lo tanto nos aseguramos 
//que después de recibir el resultado de la función asíncrona 
//ejecutaremos otra función que depende de esta.

//En este ejemplo podemos ver que tenemos una función que
//utilizará a setTimeout, además tendrá una función callback
//que se ejecutará después de que se devuelva el mensaje "Imprime letra A" 
function primero( callback ){
    setTimeout( function(){
        return callback( "Imprime letra A" );
    }, 5 * 1000 );
}

//Llamamos a la función "primero"
primero( 
    //Declaramos una función anónima, esta
    //imprimirá varios mensajes después de
    //que se espere los 5 segundos y devuelva
    //el mensaje "Imprime letra A"
    function(resultado1) {
        console.log( resultado1 );
        console.log( "Imprime letra B" );
        console.log( "Imprime letra C" );
    }
);

//Si no controlaramos la asíncronia, 
//el resultado sería el siguiente:

//Imprime letra B
//Imprime letra C
//Imprime letra A

//Pero al tener una función callback, 
//el resultado es el siguiente:

//Imprime letra A
//Imprime letra B
//Imprime letra C
