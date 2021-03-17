//Código de la Sesión #9 del Módulo 2

//Para ejecutar este programa debemos poner en consola:
//node ciclos.js 

//Tema ----> Ciclos - while

//Ejemplo de ciclo while
//Imprimir el incremento de contadorN1 y el decremento de contadorN2
//Ver como se detienen las repeticiones hasta que se deja de cumplir la condición
var contadorN1 = 5;
var contadorN2 = 30;
//La condición es más compleja ya que utilizamos un operador lógico
while( contadorN1 < 10 && contadorN2 > 25){
    //Imprimimos las variables para ver como varian sus valores por cada reptición
    console.log( "ContadorN1: " + contadorN1 +
    " ContadorN2: "+ contadorN2);
    //Incrementamos la variables contadorN1 en 1
    contadorN1++;
    //Decrementamos la variables contadorN2 en 1
    contadorN2--;
    //OJO - hacemos esto porque sino el ciclo nunca termina
};

//Ciclo do-while
//En el ciclo do-while siempre se va a ejecutar 
//una vez las intrucciones dentro de las llaves
var contadorN3 = 0;
var condicion = "Hola";
//Ciclo do-while
do{
    //Imprimimos un mensaje
    console.log("Entraste al ciclo do while");
    //Incrementamos la variable que cuenta las veces que el ciclo se ha repetido
    contadorN3++;
    //SI el contador llega a 2, se cambia el valor de la variable que controla el ciclo do-while
    if( contadorN3 == 2 ){
        condicion = "Adios"
    }
//La variable que controla al ciclo es "condicion", 
//se repetirán las instrucciones si el valor es "Hola"
}while( condicion == "Hola" );

//Ciclo do-while controlado por números
var condicionN2 = 5;
do{
    //Imprimirá en pantalla el valor de condicionN2
    console.log( "Valor: " + condicionN2 );
    //Decrementamos la variable de 5 en 5
    condicionN2 -= 5;
//Si la variable condicionN2 es menor de 5, saldrá del ciclo
}while( condicionN2 >= 5 );


//Ejercicio do-while
//Crear un programa que lea tantos números
//como se quiera hasta que se reciba un cero,
//y se mostrará un resultado, que será la
//suma de todos los números ingresados.
const prompt = require('prompt-sync')();
var recibeNumero;
var suma = 0;
do{
    //Recibimos un texto, que serán los números a sumar
    recibeNumero = prompt("Dame un número: ");
    //Convertimos a enteros los números recibidos
    suma = suma + parseInt(recibeNumero);
//Si el valor es igual a 0, se dentendrá el ciclo
}while( recibeNumero != 0 );
//Imprimimos en pantalla el resultado final
console.log( "La suma total es: " + suma);
