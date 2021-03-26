//Código de la Sesión #15 del Módulo 2

//Para ejecutar este programa debemos poner en consola:
//node funcAsincP1.js

//Tema ----> Funciones Asíncronas Parte 1

//Una función asíncrona es una función que se ejecuta de manera 
//independiente del flujo de ejecución, no sabemos en que momento
//obtendremos el valor ya que se relega la tarea a servicios
//externos, una vez que se realicen las acciones de la función, 
//devolverá un resultado.

//Ejecución normal de JavaScript
/*
//Todo esto comentado son funciones normales
//ya vistas a lo largo de la clase.
console.log( "Inicio" );
function dos(){
  console.log( "Dos" );
}
function uno(){
  console.log( "Uno" );
  //Si lo requerimos, podemos llamar una función dentro de otra
  //y esta ejecutará su respectiva funcionalidad
  dos();
  console.log( "Tres" );
}
uno();
console.log( "Fin" );
*/

//Como únicamente usamos funciones que al ejecutarse 
//se encuentran dentro de las capacidades de JavaScript 
//(en nuestro caso Nodejs), el curso de ejecución es el esperado.

//Resultado:
//Inicio
//Uno
//Dos
//Tres
//Fin

//Ejecución de funciones asíncronas en JavaScript
console.log( "Inicio" );

//Esta función utiliza una funcionalidad
//que por defecto no se encuentra en JavaScript
//esta es "setTimeout", para que se realice lo que
//deseamos, que es "esperar una cantidad de segundos"
//necesitamos de un servicio externo, se relegará 
//este trabajo a ese servicio y se seguirá ejecutando 
//instrucciones que si se puedan realizar.
function dos(){
  setTimeout( function() {
    console.log( "Dos" );
  }, 3000 );
}

function uno(){
  //Volvemos a utilizar setTimeout pero esperamos 0 segundos
  setTimeout( function(){
    console.log( "Uno" );
  }, 0 );
  //Llamamos una función dentro de otra
  dos();
  console.log( "Tres" );
}
uno();
console.log( "Fin" );

//Al ejecutar, podremos notar que el resultado es:
//Inicio
//Tres
//Fin
//Uno
//Dos

//¿Porque se imprime primero "Fin" y después "Uno" y "Dos"?
//Esto pasa porque la ejecución para imprimir "Uno" y "Dos"
//no la está realizando JavaScript(Nodejs) sino otro servicio,
//en lo que se mandan los datos y se regresa la respuesta
//ya se ejecutaron las demás instrucciones, en este caso 
//la instrucción para imprimir "Fin"
