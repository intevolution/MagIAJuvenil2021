//Código de la Sesión #10 del Módulo 2

//Para ejecutar este programa debemos poner en consola:
//node funcionesP1.js 

//Tema ----> Funciones

//Declaración de una función
function multiplica( primerOperando, segundoOperando ){
    var resultado = primerOperando * segundoOperando;
    console.log( "El resultado es: " + resultado);
}
//multiplica( 25, 2 );

function multiplicaN3(){
    var resultado2 = 12 * 12;
    console.log( "El resultado es: " + resultado2 );
}
//multiplicaN3();

//Función como expresión
var resultado = function multiplicaN2( primerOperando ){
         //2 * 25 --> 50
         //resultado = 50;
    return 2 * primerOperando;
}
//console.log(resultado( 25 ));

//Función Flecha
//Función que saluda a una persona
const saludaPersona = ( nombre ) => console.log( "Feliz cumpleaños " + nombre );
saludaPersona( "Guillermo" );

const suma = ( numero ) => console.log( numero * 2 );
suma( 12 );


//Ejercicio #1
//Escribir un programa que tenga una función a la que
//se le pasa como parámetro un número y devuelve como
//resultado un texto que indica si el número es par o impar

function determinaNumero( numero ){
    if( (numero % 2) == 1){
        console.log( "El número es impar" );
    }
    else if( (numero % 2) == 0){
        console.log( "El número es par" );
    }
}
determinaNumero( 24 );

//Ejercicio #2
//Definir una función que muestre la información de un texto
//que se introduce como argumento y determinar si el texto
//contiene mayusculas, minusculas o ambas.

function determinaTexto( texto ){
    if( texto == texto.toUpperCase() ){
        console.log( "El texto está en mayusculas" );
    }
    else if( texto == texto.toLowerCase() ){
        console.log( "El texto está en minusculas" );
    }
}
determinaTexto( "hola" ); 
