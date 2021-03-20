//Código de la Sesión #10 del Módulo 2

//Para ejecutar este programa debemos poner en consola:
//node funcionesP1.js 

//Tema ----> Funciones Parte 1

//Declaración de una función (declaración explícita)
function multiplica( primerOperando, segundoOperando ){
    //Multiplicamos los valores y los guardamos en una variable
    var resultado = primerOperando * segundoOperando;
    //Imprimimos el resultado
    console.log( "El resultado es: " + resultado);
}
//Llamada a esta función
//multiplica( 25, 2 );

//Declaración de una función sin argumentos
function multiplicaN3(){
    //Multiplicamos los valores y los guardamos en una variable
    var resultado2 = 12 * 12;
    //Imprimimos el resultado
    console.log( "El resultado es: " + resultado2 );
}
//Llamada a esta función
//multiplicaN3();

//Función como expresión
//Guardamos la función en una variables
var resultado = function multiplicaN2( primerOperando ){
    //Si sustituyeramos los valores se verían de la siguiente forma:     
    //2 * 25 --> 50
    //resultado = 50;
    //Regresamos el resultado y se guardará en la variable
    return 2 * primerOperando;
}
//Llamada a esta función
//console.log(resultado( 25 ));

//Función Flecha
//Función que saluda a una persona
//Función que no requiere de "function" ni de un nombre,
//se recomienda usar cuando se realizan pocas instrucciones
const saludaPersona = ( nombre ) => console.log( "Hola " + nombre );
//Llamada a esta función
saludaPersona( "Guillermo" );

//Función flecha que multiplica un número por 2
const suma = ( numero ) => console.log( numero * 2 );
//Llamada a esta función
suma( 12 );


//Ejercicio #1
//Escribir un programa que tenga una función a la que
//se le pasa como parámetro un número y devuelve como
//resultado un texto que indica si el número es par o impar

//Declaramos una función
function determinaNumero( numero ){
    //Comparamos si un número es impar o impar con un condicional if
    if( (numero % 2) == 1){
        //Si es impar, imprimirmos un mensaje que diga "El número es impar"
        console.log( "El número es impar" );
    }
    else if( (numero % 2) == 0){
        //Si es par, imprimirmos un mensaje que diga "El número es par"
        console.log( "El número es par" );
    }
}
//Llamada a esta función
determinaNumero( 24 );

//Ejercicio #2
//Definir una función que muestre la información de un texto
//que se introduce como argumento y determinar si el texto
//contiene mayusculas, minusculas o ambas.

//Declaramos una función
function determinaTexto( texto ){
    //Comparamos si el texto inicial es igual a el texto en mayúsculas
    if( texto == texto.toUpperCase() ){
        console.log( "El texto está en mayúsculas" );
    }
    //Comparamos si el texto inicial es igual a el texto en minúsculas
    else if( texto == texto.toLowerCase() ){
        console.log( "El texto está en minúsculas" );
    }
}
//Llamada a esta función
determinaTexto( "hola" ); 
