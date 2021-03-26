//Código de la Sesión #14 Parte 2 del Módulo 2

//Para ejecutar este programa debemos poner en consola:
//node utileriasJavascript.js

//Tema ----> Utilerías en JavaScript
//Las utilerías son código preescrito listo para utilizar,
//Por ejemplo: 
//Si necesitamos obtener un número aleatorio, no nos vamos a preocupar por hacer
//todos los cálculos matemáticos complejos desde 0, simplemente utilizamos 
//a Math, al escribir la instrucción "Math.random()" obtenemos ese número aleatorio,
//por lo tanto no nos tendrémos que preocupar por nada más y nos enfocaremos en
//realizar otras nuevas funcionalidades.

//Métodos de cadenas de texto
//Los métodos de cadenas, también forman parte de las
//utilerías de JavaScript, nos ayudarán a trabajar de una
//forma más sencilla con las cadenas, para manipularlas y
//obtener datos de ellas.

//Cadena de texto de ejemplo
var cadenaTexto = "Hola Lucia, buenas tardes Lucia";

//Método length - Nos permite obtener el número de 
//caracteres de una cadena de texto.
console.log( cadenaTexto.length );
//Método indexOf - Nos permite obtener el indice de la primera aparición
//de una cadena que nosostros seleccionemos.
console.log( cadenaTexto.indexOf( "Lucia" ) );
//Método replace - Nos permite reemplazar un valor dentro de una
//cadena de texto, por ejemplo: reemplazamos el nombre de Lucia
//por el nombre de Angel sin afectar a la cadena.
console.log( cadenaTexto.replace( "Lucia", "Angel" ) );
//Método slice - Nos permite obtener una subcadena de una cadena más grande,
//especificando el inicio desde donde se obtedrá la cadena y hasta donde 
//terminaremos de obtener esa subcadena, Ejemplo: inicia en la posición 5
//que es la L y termina en la posición 10 que es , pero no tomamos en cuenta este
//último y solo obtenemos desde la posición 5 a la 9 ( Lucia ).
var nombre = cadenaTexto.slice( 5, 10 );
console.log( nombre );

//Cadenas de texto de ejemplo
var cadenaT = "CoLOR dEl cUaDeRNo/lIbRetA: ";
var color = "Azul";

//Método toLowerCase - Nos permite convertir todos los caracteres a minúsculas
var textoFinal = cadenaT.toLowerCase();
console.log( textoFinal );
//Método toUpperCase - Nos permite convertir todos los caracteres a mayúsculas
//var textoFinal = cadenaT.toUpperCase();
//console.log( textoFinal );

//Método concat - Nos permite concatenar 2 cadenas de texto
console.log( textoFinal.concat( color ) );


