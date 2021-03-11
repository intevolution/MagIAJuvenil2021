//Código de la Sesión 6 del Módulo 2
//Estructuras de control parte 3

//Para ejecutar este programa debemos poner en consola:
//node estructurasControlP3.js

//Tema --------> Condicionales if/else y switch/case

//Para que nosostros ingresemos datos desde  
//terminal y esos datos ingresados sean usados 
//para el procedimiento del programa,
//necesitamos realizar los siguientes pasos:

//Paso 1)
//Installar npm, este es un componente de nodejs,
//su función es administar los paquetes que 
//descarguemos con el tiempo, en este caso
//necesitamos el paquete "prompt" para ingresar
//los datos.
//En terminal escribimos el siguiente comando ---> npm install npm@latest -g
//Después escribimos el siguiente comando ---> npm install prompt-sync
//IMPORTANTE: NO cambiar los comandos, si son modificados no instalará nada.

//Paso 2)
//Mandar a llamar a la funcionalidad que requerimos,
//esta funcionalidad solo debemos llamarla una vez y
//tiene que ser guardada en una constante para que
//no sea modificada por accidente.
//Para mandar a llamar a la funcionalidad, dentro del programa
//escribimos la siguiente instrucción.
const prompt = require('prompt-sync')();

//Paso 3)
//Al momento de utilizar esta funcionalidad, solo la
//guardamos en una variable y escribirmos entre
//paréntesis el mensaje a desplegar en pantalla.

//Dejo comentado un ejemplo simple, así podrás 
//probar la funcionalidad de manera sencilla.
//var nombre = prompt("Ingresa tu nombre");
//console.log("Hola " +  nombre );

//Si queremos escribir un comentario muy grande,
//solo será necesario poner /* */
/* <----Aquí inicia el comentario grande
Ejemplo
En estas líneas escribiré varios comentarios, 
OJO, todo tiene que estar dentro para que cuente como comentario.  
Aquí termina el comentario  grande ---> */


//Ejercicio 1
//Cada vez que una persona ingrese una hora del día
//se mostrará un mensaje que diga el deporte que se
//está realizando en la cancha.

//Utilizamos la funcionalidad de "prompt"
//y el dato ingresado lo guardamos en una variable
var horaDia = prompt( "Dame la hora: " );
//Para asegurarnos que se guardó el dato,
//quitamos el comentario y lo imprimimos en pantalla 
//console.log( horaDia );

//Para representar el rango de horas, utilizamos un
//condicional if, así comparamos si la hora ingresada
//se encuentra en el rango horario de un deporte.
if( horaDia <= 3 ){
    console.log( "Está el equipo de Futbol entrenando" );
}
//Dependiendo del rango horario se mostrará un mensaje
//con el deporte que se está haciendo en la cancha.
else if( (horaDia > 3) && (horaDia <= 6) ){
    console.log( "Está el equipo de Futbol Americano E" );
}
else if( (horaDia > 6) && (horaDia <= 9) ){
    console.log( "Está el equipo de Atletismo" );
}

//También se realiza una versión del código con switch
//pero en esta versión, solo se obtienen 2 resultados
//true - verdadero o false - falso
//por lo tanto para este problema, el uso de switch 
//es sumamente inficiente.
switch( horaDia <= 3 ){
    case true:
        console.log( "Equipo de Futbol");
        break;
    case false:
        console.log( "Está otro equipo" );
        break;
}

//Para ver un ejemplo donde el switch es verdaderamente
//aprovechado, se replantea el ejercicio anterior.

//Ejercicio 2
//Cada vez que una persona ingrese un deporte, te dirá
//el horario que le corresponde para la cancha.

//Utilizamos un switch ya que sabemos que solo hay tres
//valores que se ingresarán ( Futbol, Americano, Atletismo )
//Con la funcionalidad prompt, predimos desde terminal el
//nombre del deporte, para que nos de como respuesta el horario.
var deporte = prompt( "Porfavor dime el nombre del deporte: " );
//La variable que controla el switch es "deporte", "deporte"
//tendrá distintos valores, pero ya se tienen contemplados 
//en los distintos caso del switch.
switch( deporte ){
    case "Futbol":
        console.log("Horario: 1 a 3 PM ");
        break;
    case "Americano":
        console.log("Horario: 3 a 6 PM" );
        break;
    case "Atletismo":
        console.log("Horario: 6 a 9 PM");
}


//Tema --------> Arreglos

//Declaramos un arreglo con 5 elementos, todos ellos son números
var arregloNumerico = [ 1, 2, 3, 4, 5 ];
//Imprimimos todo el arreglo en pantalla
console.log( arregloNumerico );
//Declaramos un arreglo con 4 elementos, todos ellos son texto
var arregloNombres = [ "Luis", "Diana", "Omar", "Paola" ];
//Imprimimos todo el arreglo en pantalla
console.log( arregloNombres );
//Declaramos un arreglo con 8 elementos de distintos tipos de datos
var arregloMixto = [20, 16, , "Luis", , "Paola", true, false];
//Imprimimos todo el arreglo en pantalla
console.log( arregloMixto );
//Accedemos a una posición del arreglo en específico
console.log( arregloNombres[0] );

